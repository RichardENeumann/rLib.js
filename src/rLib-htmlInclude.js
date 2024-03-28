export function htmlIncludeAll() {
  const tagsWithInclude = document.querySelectorAll("[rl-include]");
  const includeRequests = Array.from(tagsWithInclude);

  includeRequests.forEach(async (el) => {
    const url = el.attributes["rl-include"].value;
    if (el.hasAttribute("rl-external") && el.attributes["rl-external"].value === "true") {
      el.outerHTML = await htmlInclude(url, el.attributes["rl-external"]);
    } else {
      el.outerHTML = await htmlInclude(url);
    }
  });
}

export async function htmlInclude(url, external = false) {
  let fetchUrl = url;
  let result;

  if (!external) {
    fetchUrl = `${window.location}${url}`;
  }
  try {
    const response = await fetch(fetchUrl);
    result = await response.text()
  }
  catch (e) {
    result = "<p class='htmlIncludeError'>HTML include failed</p>";
  }
  return result;
}
