// htmlInclude() will fetch the given url and return the result as text
async function htmlInclude(url) {
  let result;

  try {
    const response = await fetch(url);
    result = await response.text();
  } catch {
    result = "<p>HTML include failed</p>";
  }
  return result;
}

// htmlIncludeAll() will parse the DOM for tags with the "rlInc"
// Attribute. Then it will fetch the resource at the attribute's given
// URL and replace the tag with the resulting text.
export default function htmlIncludeAll() {
  const tagsWithInclude = document.querySelectorAll("[rlInc]");

  [...tagsWithInclude].forEach(async (el) => {
    const target = el;
    const url = el.attributes.rlInc.value;
    target.outerHTML = await htmlInclude(url);
  });
}
