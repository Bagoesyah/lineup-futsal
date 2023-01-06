export const GROUND = {
  height: 500,
  width: 350,
};

export const LINEUP_URL = 'https://www.voety.net/#/lineup';

export const API = (() => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000/v1';
  }
  return 'https://voety.net/api/v1';
})();

export const FORMATIONS = ['2-0-2', '1-1-2', '2-1-1', '1-2-1', '3-0-1'];
