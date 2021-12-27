# React Project

## Summary
React Project 시작 페이지 입니다. 해당 문서에서는 CRA 명령어 없이 Webpack을 통해 파일들을 번들링 하는 과정을 설명합니다. 

## 목표
- CRA 명령어 없이 프로젝트 setup

## 목표가 아닌 것
- 각 명령어, 모듈, 라이브러리에 대한 설명

## Body

1. Repository 생성 후 `package.json` 파일 생성
```
npm init --yes || yarn init -y
```

2. Webpack 설치
```
yarn add webpack webpack-cli -D
```

3. `webpack.config.js` 생성
- 기본적인 option 설정: entry, output, plugins, module

4. `index.html` 생성
- CRA 형식과 동일 하게 root 노드를 불러와 모든 컴포넌트를 불러오는 방식으로 설정
- index.html
```
<html>
    <head>
        <title>React Html setup without CRA</title>
    </head>
    <body>
        <div id="root"/>
    </body>
</html>
```

5. 생성 후 `webpack.config.js` 파일의 plugins에 `HtmlWebPackPlugin`을 추가
- `template`, `filename` index.html 경로 설정
```
const HtmlWebPackPlugin = require('html-webpack-plugin');
new HtmlWebPackPlugin({
    // path of the file which can be used as a template
    template: path.resolve(__dirname, 'public/index.html'),
    // name of the file which will be created by HtmlWebPackPlugin
    filename: 'index.html'
})
```

6. React 설치
```
yarn add react react-dom
```

7. index.js, App.js 파일 생성
- index.js: root node을 가져와 react-dom을 통해 렌더링 할 컴포넌트
- App.js: 웹페이지 시작 파일

8. Babel 세팅
```
yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader
```
- webpack.config.js 의 `module` `rules` 추가
```
rules: [{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
    }
}]
```