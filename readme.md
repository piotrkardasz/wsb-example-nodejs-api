# Example API written in Express - NodeJS
for educational purposes


### Requirements
- NodeJS
- NPM


### Installing
Run command in project dir
```shell script
npm install
```

### Startup
To start project run command:
```shell script
npm start
```

### Test
Run CLI command or copy to Postman
```shell script
curl --location --request GET 'http://localhost:3001/products/1' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "Banana",
	"price": 10
	
}'
```

Enjoy!
