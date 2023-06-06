# Js Constants

package constant bindings for using applications

## Demo

demo for using [demo-front-app-react](https://github.com/front-app-react/demo)

## Installing

`npm i @front-app-react/constants`

## Packages

List of packages used:

- stringArgsFunc - Places values with variables in a text string
- objectByString - Get the value object with the name point

## _stringArgsFunc_

### Description

Places values with variables in a text string
in the text string :

- Any value before return is known as a variable
- Any value after the last comma before return is known as JavaScript code

### Usage

###### dev

```
const str = "count,return 'The number of : ' + count";
const value = stringArgsFunc(str,["41"]);
```

###### result

```
const value = "The number of : 41";
```

### Arguments

|      |                    |
| ---- | ------------------ |
| arg1 | type string , text |
| arg1 | type string array  |

### Value

The output value is string

## _objectByString_

### Description

Get the value object with the name point

### Usage

###### dev

```
const object = {
    signIn : {
        username : "user username",
        password : "user password",
    }
};
const value = objectByString(object,"signIn.username");
```

###### result

```
const value = "user username";
```

### Arguments

|      |                                         |
| ---- | --------------------------------------- |
| arg1 | type object                             |
| arg2 | type string, endpoint name obj with dot |

### Value

The output value is anything
