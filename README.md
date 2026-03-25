# Cybersecurity Methods Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A collection of documents created in [Astro](https://docs.astro.build/en/getting-started/) regarding information security processes and penetration testing techniques.

![Main project](https://snipboard.io/hvyPAL.jpg)

This application does not have an official name. It is a list of computer networking technologies that will be useful for the vulnerability discovery process for an ethical hacker. As an example, it covers everything from the general functioning of a computer architecture to port scanning and anonymization methods, such as the use of ProxyChains and the Onion network via Tor.

All information in this text was drawn from courses, training programs, and professional experience.

## Project Structure

Inside of this Astro + Starlight project, it'll be possible to see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Want to contribute?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), and go forward to clone this entire repository:

```bash
git clone -b new/astro-template https://github.com/hexthersync32/ethical-hacking-security-documentation.git
```

```bash
cd ethical-hacking-security-documentation/
```

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## ⚠️  Watch Out!

### Ethical and Legal Disclaimer

This project is provided strictly for educational, research, and ethical cybersecurity purposes only. It is intended to help students, security professionals, and developers better understand input‑logging mechanisms in controlled and fully authorized environments.

Unauthorized or malicious use of hacking or any similar techniques is illegal, unethical, and may result in severe consequences, including:

- Violation of privacy laws;

- Criminal prosecution;

- Civil liability;

- Permanent damage to professional reputation.

By knowing this project, you agree to operate it only with explicit permission from the system owner and in compliance with all applicable local, state, federal, and international laws. Misuse of this InfoSec informations is solely the responsibility of the user.