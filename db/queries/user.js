export default {
  createUser: `
    INSERT INTO users(
        email,
        username,
        password
    ) VALUES($1, $2, $3) RETURNING id, email, username
    `,

  checkForUsername: `
    SELECT id, username, password FROM users WHERE username=$1
    `,
};
