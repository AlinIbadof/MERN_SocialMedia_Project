# Society of Alin - Project

---

### Currently in development

---

This project is a full stack social media application built with the MERN stack. In terms of features, a user can register, log in, create new posts, like other posts, add friends, and so on.

Other technologies used include Redux, MUI, and JWT.

One of the main issues that i encountered was when trying to display posts on the home page. There was an error present if the user's friends object was undefined or null, causing the entire page to break and not show anything. To solve this, I used optional chaining (?.) to determine whether the object we are attempting to access is undefined or null.

Future development:

- Fix dark mode coloring issues.
- Fix posts likes not being updated.

This was accomplished with the assistance of Ed Roh.
