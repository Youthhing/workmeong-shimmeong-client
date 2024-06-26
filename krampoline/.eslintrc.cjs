module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    // var는 사용할 수 없다
    'no-var': ['error'],
    // 세미콜론은 사용하지 않겠다(타입스크립트 프로젝트에서 권장)
    semi: ['error', 'never'],
    // Function.prototype.apply() 를 사용할 때는 spread 연산자를 사용해야 한다
    'prefer-spread': ['error'],
    // 선언한 표현식은 반드시 사용해야 한다
    'no-unused-expressions': ['error'],
    // Function 객체에 new 연산자를 사용할 수 없다
    'no-new-func': ['error'],
    // 생성자 함수는 return을 할 수 없다
    'no-constructor-return': ['error'],
    // if 문에서 return을 하면 else 문에서 return을 할 수 없다
    'no-else-return': ['error'],
    // 안전하지 못한 옵셔널 체이닝을 할 수 없다
    'no-unsafe-optional-chaining': ['error'],
    // 불필요한 반복문은 사용할 수 없다
    'no-unreachable-loop': ['error'],
    // 파라미터는 읽기 전용이다
    'no-param-reassign': ['error'],
    // 선언하지 않은 코드를 사용할 수 없다
    'no-use-before-define': ['error'],
    // if ~ else 중첩은 허용하지 않는다
    'max-depth': [
      'error',
      {
        max: 3,
      },
    ],
    // return 문 이전에는 반드시 빈 줄이 있어야 한다
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // 문자열 선언에는 홑따옴표를 사용한다
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    // 중첩된 object 앞뒤에는 공백이 있어야 한다.
    'object-curly-spacing': ['error', 'always'],
    // 중첩된 배열 앞뒤에는 공백이 있으면 안된다
    'array-bracket-spacing': ['error', 'never'],
    // 중괄호의 스타일을 통일
    'brace-style': ['error'],
    // no-alert 룰과 충돌하므로 끔
    'no-restricted-globals': ['off'],
    // console.log 는 사용할 수 없다
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    // jsx에는 쌍 따옴표를 사용해야 한다.
    'jsx-quotes': ['error', 'prefer-double'],
    // 문자열 연결에는 템플릿 문자열을 사용해야 한다
    'prefer-template': ['error'],
    // 객체의 프로퍼티 이름은 필요할 때만 따옴표로 감싸야 한다
    'quote-props': ['error', 'as-needed'],

    'no-prototype-builtins': ['off'],
    'react-hooks/exhaustive-deps': ['off'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
    },
    'import/resolver': {
      typescript: './tsconfig.json',
    },
  },
};
