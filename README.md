# Js Constants

package constant bindings for using applications

## Demo

demo for using [demo-front-app-react](https://github.com/mahdikhanbeigi/demo-front-app-react)

## Installing

`npm i @front-app-react/constants`

## Packages

List of packages used:

- checkSizing - for package @front-app-react/theme Getting the defined sizes of the theme
- getColorWithKeyCss - for package @front-app-react/theme Make css color style from the theme
- colorHandler - for package @front-app-react/theme Making theme coloring styles element
- stringArgsFunc - Places values with variables in a text string
- objectByString - Get the value object with the name point

## _checkSizing_

### Description

Sizes such as padding and radius are defined in the @front-app-react/theme package.
We can create normal, small, and large sizes with the style name
It is necessary to talk about the configuration sizing of the package [@front-app-react/theme](https://www.npmjs.com/package/@front-app-react/theme)
Sample using in https://github.com/front-app-react/elements

### Usage

###### dev

```
const Typography = styled("p")`
    color : ${themeProps=> themeProps.theme.style.getColor("red")};
    ${themeProps=> {
        return checkSizing({ keyCss : "font-size", props : themeProps,keyJson : "btn.font-size" }) + ";";
    }
`
export default ()=> {
    return (
        <Typography $sizing="lg">Hello world</Typography>
    )
}
```

###### result

```
const Typography = styled("p")`
    color : #E16262;
    ${themeProps=> {
        return "font-size : 1.25rem;";
    }
`
```

### Argument one

type object
| property | description |
|--|--|
| keyCss | property css |
| props | theme props
| keyJson | key reference sizing theme example sizing.json

### Value

The output value is property: value in css

## _getColorWithKeyCss_

### Description

Make css color style from the theme
It is necessary to talk about the configuration color of the package [@front-app-react/theme](https://www.npmjs.com/package/@front-app-react/theme)

### Usage

###### dev

```
const Button = styled("button")`
    ${themeProps=> {
        return getColorWithKeyCss({ name : "background-color",color : "red", props : themeProps }) + ";";
    }
`
```

###### result

```
const Button = styled("button")`
     color : #E16262;
    ${themeProps=> {
        return "color : #E16262;";
    }
`
```

### Argument one

type object
| property | description |
|--|--|
| name | property css |
| color | theme color property name
| props | theme props

### Value

The output value is property: value in css

## _colorHandler_

### Description

Creates an element with color style, background color and border color with handle of mouse hover and active modes.
It is necessary to talk about the configuration color of the package [@front-app-react/elements](https://github.com/front-app-react/elements)

### Usage

###### dev

```
const Button = styled("button")`
    ${themeProps=> {
        return colorHandler(props, true) + ";";
    }
`
const ButtonWithoutStyleActions = styled("button")`
    ${themeProps=> {
        return colorHandler(props, false) + ";";
    }
`
export default ()=> {
    return (
        <Button $textColor={{
              variant: {
                name: "white",
              },
        }} $bgColor={{
              variant: {
                name: "primary",
              },
              active: {
                name: "red",
              },
        }} $borderColor={{
              variant: {
                name: "primary",
              },
        }}>Hello world</Button>
         <ButtonWithoutStyleActions $textColor={{
              variant: {
                name: "white",
              },
        }} $bgColor={{
              variant: {
                name: "primary",
              },
        }} $borderColor={{
              variant: {
                name: "primary",
              },
        }}>Hello world</Button>
    )
}
```

###### result

```
const Button = styled("button")`
    &:disabled{
         color: #5D5D5D;
        background-color: #f0f0f0;
        border-color: #f0f0f0;
  }

    &:not(:disabled) {
    color: rgb(255, 255, 255);
    background-color: rgb(58, 150, 121);
    border-color: rgb(58, 150, 121);
     &:hover {
        color: rgb(255, 255, 255);
        background-color: rgb(58, 150, 121);
        border-color: rgb(58, 150, 121);
    }
     &:active {
        color: rgb(255, 255, 255);
        background-color: rgb(225, 98, 98);
        border-color: rgb(225, 98, 98);
    }
    }
`
const ButtonWithoutStyleActions = styled("button")`
    &:not(:disabled) {
    color: rgb(255, 255, 255);
    background-color: rgb(58, 150, 121);
    border-color: transparent;
    }
`
```

### Argument one

type object
| property | description |
|--|--|
| $textColor |[ThemeColor](https://github.com/front-app-react/elements)
| $bgColor | [ThemeColor](https://github.com/front-app-react/elements)
| $borderColor | [ThemeColor](https://github.com/front-app-react/elements)
| $isActive | type boolean, handle active mode

### Argument two

type boolean
handle of mouse hover and active modes

### Value

The output value is multi property: value in css

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
