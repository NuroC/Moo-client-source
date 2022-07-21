# Moo-client-source
this repository includes the full moomoo.io client source code unbundled, as it is.

## Building and using your own bundle

First what you need to do, is open a new terminal and navigate to the directory where you want to install the client.

You then need to clone the repository and go into the client workspace.

```bash
git clone https://github.com/NuroC/Moo-client-source
cd Moo-Client-Source
```

Then, you need to install the dependencies.

```bash
npm install
```

This command will run the following commands:

```bash
webpack-cli --config ./webpack.config.js --verbose
npm i --global live-server
live-server --port=6969 --verbose
```

When you see a message like this:

```yaml
Ready for changes
```
You're all set!

Now just join MooMoo.io with the script from [here](./scripts/bundleReplacer.user.js)

Enjoy!

