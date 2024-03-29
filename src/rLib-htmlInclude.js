// htmlInclude() will fetch the given url and return the result as text
export async function htmlInclude(url) {
  let result;

  try {
    const response = await fetch(url);
    result = await response.text();
  } catch {
    result = "<p>HTML include failed</p>";
  }
  return result;
}

// htmlIncludeAll() will parse the DOM for tags with the "rl-include" 
// Attribute. Then it will fetch the resource at the attribute's given 
// URL and replace the tag with the resulting text.
export function htmlIncludeAll() {
  const tagsWithInclude = document.querySelectorAll("[rl-include]");
  const includeRequests = Array.from(tagsWithInclude);

  includeRequests.forEach(async (el) => {
    const target = el;
    const url = el.attributes["rl-include"].value;
    target.outerHTML = await htmlInclude(url);
  });
}
