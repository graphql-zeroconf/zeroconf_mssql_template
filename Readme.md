# Get Started

### Clone the repository

```
git clone https://github.com/graphql-zeroconf/zeroconf_mssql_template.git
```

### Install the packages

```
cd zeroconf_mssql_template
npm install
```

### Create your .env file on your project root

```
cat <<EOF >.env
MSSQL_HOST=
MSSQL_PORT=1433
MSSQL_DATABASE=
MSSQL_USER=
MSSQL_PASSWORD=
GRAPHQL_HOST=localhost
GRAPHQL_PORT=4000
EOF
```

### Start with graphql

```
$ npm start
```

or

```
$ npm start graphql
```

### Start with apollo

```
$ npm run apollo
```