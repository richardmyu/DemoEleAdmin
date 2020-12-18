/**
 * @description parse url param
 * @param {string} url
 * @returns {Object}
 */
function urlParamParse(url) {
  const search = decodeURIComponent(url.split('?')[1].replace(/\+/g, ' '));
  if (!search) {
    return {};
  }

  const obj = {};
  const searchArr = search.split('&');
  searchArr.forEach(cha => {
    const index = cha.indexOf('=');
    if (index !== -1) {
      const name = cha.substring(0, index);
      const newVal = cha.substring(index + 1, cha.length);
      obj[name] = newVal;
    }
  })
  return obj;
}

module.exports = {
  urlParamParse
}
