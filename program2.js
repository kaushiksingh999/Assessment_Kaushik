const decodeTheRing = function (s, p) {

  // write your code here

  let m_ptr = 0;  // Pointer for the message `s`
  let p_ptr = 0;  // Pointer for the pattern `p`
  let starIdx = -1;  // The position of the last '*' in the pattern
  let match = 0;     // The position in the message `s` to resume after a star

  while (m_ptr < s.length) {
    // If characters match or pattern has '?', advance both pointers
    if (p_ptr < p.length && (p[p_ptr] === s[m_ptr] || p[p_ptr] === '?')) {
      m_ptr++;
      p_ptr++;
    }
    // If pattern has '*', mark the position and try to match the rest
    else if (p_ptr < p.length && p[p_ptr] === '*') {
      starIdx = p_ptr;
      match = m_ptr;
      p_ptr++;  // Move pattern pointer to the next character after '*'
    }
    // If no match, backtrack to the last '*' and try matching more characters
    else if (starIdx !== -1) {
      p_ptr = starIdx + 1;
      match++;
      m_ptr = match;
    }
    // If no match and no star to backtrack to, return false
    else {
      return false;
    }

  }
  // Ensure that the remaining characters in the pattern are all '*'
  while (p_ptr < p.length && p[p_ptr] === '*') {
    p_ptr++;
  }

  // If we've processed the entire pattern, it's a match
  return p_ptr === p.length;
};

module.exports = decodeTheRing;