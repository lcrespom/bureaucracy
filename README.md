# bureaucracy

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Bureaucracy model

\* = mandatory

- User:
    - Name
    - Hash

- Tag
    - \* Name
    - Description

- Account
    - \* Name
    - \* Tags
    - \* UserId
    - Account number (e.g. bank, policy, etc.)
    - URL
    - Description
    - \* Creation date (hidden)
    - MoneyStuff
        - Balance (editable + updated by transactions)
        - Expense / Income
        - Approx / fixed
        - Periodicity (enum: yearly, monthly, weekly ...)
        - Update day (day in year or day in month...)
    - Reminder
        - Periodicity
        - Day

- Transaction
    - \* Date
    - \* Amount
    - \* AccountId
    - Description


## ToDo
- Implement bureaucracy
	- Implement full functionality to ensure framework meets expectations
- Setup main layout
	- ~~Left: side menu with all tables~~
	- Right:
		- ~~Item edit form~~
		- ~~Table~~
		- Search button at top of table
- Generic components
	- ~~Menu~~
	- ~~Table~~
	- ~~Form~~
	- ~~Popup~~: update Bootstrap Version
		- ~~Loading... => open it when using the REST API~~
		- ~~Confirm (yes/no) => use it to confirm delete~~
		- ~~Alert~~
		- ~~Keyboard support + focus management~~
		- ~~Prompt~~
- ~~Routing~~: check why `#` is not working
- ~~API backends~~
	- ~~Get JSON data from json-generator.com~~
	- ~~Get JSON data from resty~~
- Flexible configuration
	- Non-string types (for table cell and form input)
		- ~~Number~~
		- ~~Select~~
		- ~~Date~~ (test more)
		- Time
	- ~~`attrs` for passing attributes to the form input, e.g. readonly, etc.~~
	- ~~Autofocus~~
	- Custom validation
	- Form sections for grouping with `<fieldset>`
	- ~~Computed fields, used in table column and readonly~~
	- ~~Nested fields, e.g. author.name.first~~
	- ~~HTML cell rendering for validated data (e.g. e-mail with `<a href="mailto:...">`)~~
