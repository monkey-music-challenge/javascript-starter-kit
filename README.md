# javascript-starter-kit

Before you get started here, make sure you have Signed Up at http://monkeymusicchallenge.com. Also make sure that you have registered your team for the warmup and received your API key at http://warmup.monkeymusicchallenge.com. Then head over to your team page to get more detailed instructions on the game itself.

To understand this starter kit you will need to have basic knowledge of

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [nodejs](http://nodejs.org/)
* [npm](https://www.npmjs.org/)

You will also need to have `node` and `npm` installed properly on your system.
Google can help you with this.

## Usage

```bash
git clone git@github.com:monkeymusicchallenge/javascript-starter-kit.git
cd javascript-starter-kit
npm install
TEAM=myteamname API=XXXX node index.js
```

After running the above sequence, the monkey should be running around randomly on your team page.

The program should exit with a simple "Game over." statement. Now get coding!


## Get started

`index.js` contains the boilerplate needed to communicate with the server. You should not need to change anything in here unless we have done something wrong.

`monkey.js` is quite confused and seemingly random at the moment.

In order to complete the challenge, implement your AI so that `monkey.move` makes the right choices. Pathfinding and AI ftw!

