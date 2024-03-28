// htmlInclude() will fetch the given url and return the result as text
export async function htmlInclude(url) {
  let result;

  try {
    const response = await fetch(url);
    result = await response.text()
  }
  catch (e) {
    result = "<p class='htmlIncludeError'>HTML include failed</p>";
  }
  return result;
}

// htmlIncludeAll() will parse the DOM for tags with the "rl-include" attribute.
// Then it will fetch the attributes given url and replace the tag with the resulting html
export function htmlIncludeAll() {
  const tagsWithInclude = document.querySelectorAll("[rl-include]");
  const includeRequests = Array.from(tagsWithInclude);

  includeRequests.forEach(async (el) => {
    const url = el.attributes["rl-include"].value;
      el.outerHTML = await htmlInclude(url);
  });
}
