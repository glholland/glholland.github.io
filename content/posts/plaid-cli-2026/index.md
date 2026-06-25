+++
title = "Introducing plaid-cli: A Secure CLI for the Plaid API"
date = "2026-06-10T21:45:00-04:00"
draft = false
tags = ["go", "cli", "plaid", "finance", "automation", "security"]
categories = ["Projects", "Tools"]
showTableOfContents = true
showHero = true
heroStyle = "basic"
sharingLinks = ["linkedin", "reddit", "bluesky", "twitter"]
+++

## Programmatic access to your financial data, without the bloat

{{< lead >}}
Leveraging the internet for profit and fun!
{{< /lead >}}

This CLI was envisioned with a few core tenets in mind: get transaction data, store it securely, and make it easily exportable.

{{< github repo="glholland/plaid-cli" showThumbnail=true >}}

With the advent of all things agentic, it's all too easy to over build something and I wanted to attempt to stay more true to the Unix philosophy [DOTADIW](https://en.wikipedia.org/wiki/Unix_philosophy#Doug_McIlroy_on_Unix_programming). I wanted to access and organize my transactions securely so that's what I built. No more, no less. ...for the first few iterations at least. :sweat_smile:

## Inspiration

I wanted to see my transaction history all in one place; not disparate PDFs from different financial institutions.

I've known about the Plaid API for a while and have kept an eye on it. A few years ago it was still a cost to use, even as a hobbyist, but sometime this year Plaid announced [trial accounts](https://support.plaid.com/hc/en-us/articles/39994173227159-What-is-the-Plaid-Trial-plan) which allow for production access to the API for free, albeit with some limitations.

This was the catalyst that set me off on wrapping the API in some code to give myself programmatic access to my own data. This interest was initiated by each financial institution providing transaction histories in a pitiful manner and my desire to have more insights into my own little business of one.

## Getting Started

The binaries are built and distributed via [GitHub releases](https://github.com/glholland/plaid-cli/releases), [Homebrew](https://github.com/glholland/homebrew-tap), and [Chocolatey](https://community.chocolatey.org/packages/plaid-cli) via [GoReleaser](https://goreleaser.com/).

If you are interested in building from source, you can clone the repo and run `task build` to get the binary. You can also set your `GOOS` and `GOARCH` environment variables to build for different platforms. The code is fairly straightforward and should be easy to navigate if you're interested in contributing or just want to see how it works under the hood.

Otherwise, you can checkout [glholland/homebrew-tap](https://github.com/glholland/homebrew-tap) and run `brew install glholland/tap/plaid-cli` to install it via Homebrew or use `choco install plaid-cli` for the Windows users out there.

{{< github repo="glholland/homebrew-tap" showThumbnail=true >}}

### Prerequisites

Well, this is probably my favorite part about writing anything in Go. Once the development is done and it's compiled, the binary has no dependencies. If you want to build it from source, have Go 1.26 installed and you're good to go. The `go.mod` file is fairly slim but a notable shout out to Plaid for providing a [Go client library](https://github.com/plaid/plaid-go) which made development much easier. (Read: Cost fewer tokens. :laughing:)

### Configuration

I won't describe how to sign up with Plaid and get API keys but you can find that info in [their docs](https://plaid.com/docs/).

Once you get your API keys and install the binary, you can run `plaid-cli configure` to set up your credentials. The CLI will prompt you for your Client ID, Client Secret, and the Environment. If you've setup your trial Production access, make sure you set "production" as the environment.

Finally, you'll be prompted to choose whether to enable encryption for the stored config and transactions. I would recommend doing so but, hey, you do you.

### Linking a Bank Account

This is probably one of the niftiest features. If you've ever interacted with Plaid as a consumer before and you've made it this far, you're probably curious how the CLI handles the linking portion. This is a key process.

I figured opening a browser window to handle the transaction would be best since its already [well documented](https://plaid.com/docs/link/web/) and who even knows their banking password? That's in a password manager so let's just open the browser and let the processes which already exist handle it.

`plaid-cli login` will open initiate the linking process, exchange the id & secret for a link token, and open the browser to the Plaid Link flow. From there you're in familiar air if you've ever linked an account to Rocket Money or [[insert fintech product here]].

### *Coffee Break*

At this point you're probably tired or bored so maybe a cup of coffee is in order. Go ahead and do that and I'll wait.

...

Welcome back! Let's sync some transactions.

### Syncing Transactions

`plaid-cli sync` will query the Plaid API for any transactions that have not been previously synced and reconcile the differences using the cursor. It's a clever little system that Plaid has set up to make sure you don't have to worry about duplicates or missing transactions but as this is probably the first time syncing, it'll start fresh and pull all transactions allowed by the API, which is [730](https://plaid.com/docs/transactions/#integration-overview). I've went ahead and hardcoded the max at the Link token creation step.

Once you've synced once, it's much faster since the difference is generally minute if you sync once a week like I've been doing.

### Querying and Exporting Data

So now you have created the Plaid trial account, found your API secrets, installed a random binary from the internet, configured the creds, linked one or more bank accounts, and performed initial sync. After all of that, you can finally see some **data**.

`plaid-cli transactions` will ask how far back you wanna see. You can select 30, 60, 90, or all. It'll pull the transactions from the `~/.plaid-cli/cache.json`. This will be an encrypted JSON file if you chose to use that a few steps ago.

I've generally been dumping it out to CSV and viewing that in either Excel or a Google Sheet.

### Rules and Correlation engine

Initially, I didn't want to muddy the waters with a rules feature but once I started seeing my transaction history, I realized I needed to be able to have some ability to categorize and tag transactions that may not report themselves accurately. For example, my mortgage looks like an debit out of my account with no indication that it's a mortgage payment. I have a rule that can look categorize it as a "bill" if it's within a certain amount from a specific account.

I've spent some time thinking about features I wish existed in other finance aggregators and I always wish that the tools were smart enough to correlate the debits from a depository (checking) account with the credits to a credit card or installment/loan account, matching amounts exactly and a few days apart is almost a 1:1 correlation. As this was a type of rule but requires a bit more logic, I implemented `plaid-cli rules correlate` which performs this and sets those transactions as "Transfer: Credit Card Payment" and tags them with `transfer` and `card-payment`.

This is exactly why having this level of customization is important to me. I can make the rules that I want and not be limited by seemingly arbitrary opinions of a company.

## Future Roadmap

There's lots of potential but I'm only interested in possibly having better export features and possibly some basic insights. Again, this tool is just that, a tool It gets my data, helps me categorize it, and now I can [ask Claude](https://github.com/glholland/plaid-cli/blob/main/SKILLS.md) "Where the heck did my money go?!"

... or maybe "How might I optimize my spending based on the credit card benefits I have available to me?" :moneybag:
