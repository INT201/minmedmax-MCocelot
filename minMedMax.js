const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  sortnum = {}
  if (n1 > n2 && n1 > n3) {
    sortnum = { min: n3, mid: n2, max: n1 }
    return sortnum
  } else if (n1 > n2 && n1 < n3) {
    sortnum = {min: n2, mid: n1, max: n3}
    return sortnum
  }else if (n1 < n2 && n1 < n3&& n2>n3) {
    sortnum = { min: n1, mid: n3, max: n2 }
    return sortnum
    }else  {
      sortnum = { min: n1, mid: n2, max: n3 }
    return sortnum 
    }
}

module.exports = minMedMax
