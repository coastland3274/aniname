export const getHostPathname = (url: string) => {
  try {
    const u = new URL(url);

    return u.host + (u.pathname === '/' ? '' : u.pathname);
  } catch {
    return '';
  }
};

export const getTwitterUrl = (username: string) => {
  try {
    if (username === '' || username.startsWith('http')) {
      throw new Error('Invalid username');
    }
    const u = new URL(`https://twitter.com/${username}`);

    return u.href;
  } catch {
    return '';
  }
};
