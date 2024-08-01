const path = require('path');

module.exports = {
  entry: './assets/js/indexAlvearium.js',  // Ruta al archivo principal de tu aplicación
  output: {
    filename: 'bundle.js',  // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'),  // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Busca todos los archivos .js
        exclude: /node_modules/,  // Excluye la carpeta node_modules
        use: {
          loader: 'babel-loader',  // Usa Babel para transpilar código ES6+
          options: {
            presets: ['@babel/preset-env'],  // Configuración de Babel
          },
        },
      },
    ],
  },
};
