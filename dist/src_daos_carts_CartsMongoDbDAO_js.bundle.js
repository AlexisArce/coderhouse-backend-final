"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_daos_carts_CartsMongoDbDAO_js";
exports.ids = ["src_daos_carts_CartsMongoDbDAO_js"];
exports.modules = {

/***/ "./src/config/db.js":
/*!**************************!*\
  !*** ./src/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  fileSystem: {\n    productsPath: path__WEBPACK_IMPORTED_MODULE_0__.resolve(__dirname, \"../data\", \"products.json\"),\n    cartsPath: path__WEBPACK_IMPORTED_MODULE_0__.resolve(__dirname, \"../data\", \"carts.json\")\n  },\n  mongodb: {\n    cnxStr: \"mongodb+srv://admin:09122018carp@clustercoderhouse.vludd.mongodb.net/ecommerceCoderhouse?retryWrites=true&w=majority\",\n    options: {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n      //useCreateIndex: false,\n      serverSelectionTimeoutMS: 5000\n    }\n  },\n  firebase: {\n    type: \"service_account\",\n    project_id: \"nodecoderhouse\",\n    private_key_id: \"16a3db852297bca1762bd65eec8243e52418a0e8\",\n    private_key: \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCpS/ffidd31H+e\\n3GtOEkAa/20tTKsvQLcJFTy6MG2oJCYSPxJrNkyYuogUqxyVA31mDlz6f4oRjuIg\\na08GZzBx3XhY7vDghq61cYvlVa9b5yAX22JdN+osxBwjMraDIp3154dJatC6dujI\\nZsXJWsCg4f/KKHJsYlIdDBOnvE9VH/2dAFbTeeS/3Ft0WbxwkXLB1q5PimwZ0G2B\\n/dn422EgxuyOp8sRlxjeCH3aMnDlLsh5oYFfq56PPGGQ6OAwOFLRuEbfdvs5r2T2\\nzXDo23YDy8E/0lYuGjGjIURK1sIFIjgTSZDwV6Wt3Dcn5ky1ZaH6c1o9hzzJkSWC\\nphX1V5KbAgMBAAECggEADXe3JMfE5cn4Sw1y1dea1Or75u4h8hTeWrEfTxp6JrWV\\nd78funqr1jyEhcxk7i/EYoGDAQRzWdk5gOW4eCRuVKiPIdgEPoBIVrPNMrXByPhW\\nc79mkE7Z6KzDJkOrBDyVP1InT35ZU3QRKZwPYOjAySuhWxYjoB6kNJ5Y0++lifpr\\ntA5ORTu3MhToIRnLU6xlgFsH9CjNAG1nqr3QRZwx/Dj7LM8YfeNuW4MDRjD1jWtn\\nSBdoihnyIfBcSedVrbeGfOBzmyvh6HabWl0mCVpINkwTDyrSEg/P0vUs//+2OMYq\\naC/8ktmas/LFa9C1lLbOeiPcVtfnBW54YrvP52ZcaQKBgQDn787BAeJMBCOxwWJY\\nkZWopmTWIjSC4sPPLAr1sGSt/2P7hOSbO6O7PpMZ1LBc6/3XNOLjdvlPS4R3b3e8\\nbDvBgaLLZf0ArMwWt31ItOPVT1R7ES5YELMxql+mCQPWJX1rpOjtLtoXMH4KNJ6t\\nXnie7LomjGl7szZ3kzpU1bm9eQKBgQC63HSFg7cM/sqZizJLBr8KRdgDYO4+/L5k\\nb46fRaqY44SbXPqu8L2DCtqUG7D798T0VnYok4DHCHnDYArnEkWS/LWiL7lRa/Ba\\nAk1c8JtC46Pd8ta0ZFzEeEcO9xQLypvHepwEbHWZaaEu9ZTLGCcdxLb+SDH3hsbQ\\nWLzdw84PswKBgDqc/dEE2t1/Bk47otDjKcEPG9iJmF+jUvyeEr74LtlR+0Bq2yLn\\ntX7yV1Zly5QQB3xFXzlArcx+NyG/x7CUYZ2LV0qzoXZ0NLdg84ZWQGV9wMnBE8cp\\noT9h4P4itRd/LezwJfUaq/7EQHXvylHh1/XBuWFYhqe+KHubd1hNEr1xAoGBAKxS\\nngp625baadCLs8fI4ukAXCNRgqUHxDUvQ+HSB2+Tcjks1+n5DWwJ2GV53A+iATor\\nejAVR09Fm7T3n1ZVXWAeOQrm5AoYdsErGlk5cpWPBRGr3yDg5UQyf6Vnak8te9fM\\nVJEnzJO7++8ofx2Emp4zSWbbAWl6G2MMUrBY4HFNAoGBAI1kSN+qxQJuYWZeLneo\\nGPa2K0UQC5aKxtcnmsUXgA7UIgrfAEytFhdQWVwCiIzTyLgOp+HtMErnqPTFX+QF\\nbKQNvyhRZTdwcMtuGEYyUi+7RiJDzf/FZmZEDgLgtjt5ms0HmdiMYAgp8W/1QmrJ\\n8+gjyfb/2M7DkO1GjtPmmZgR\\n-----END PRIVATE KEY-----\\n\",\n    client_email: \"firebase-adminsdk-2n5b0@nodecoderhouse.iam.gserviceaccount.com\",\n    client_id: \"106742396473329705789\",\n    auth_uri: \"https://accounts.google.com/o/oauth2/auth\",\n    token_uri: \"https://oauth2.googleapis.com/token\",\n    auth_provider_x509_cert_url: \"https://www.googleapis.com/oauth2/v1/certs\",\n    client_x509_cert_url: \"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2n5b0%40nodecoderhouse.iam.gserviceaccount.com\"\n  }\n});\n\n//# sourceURL=webpack://proyecto-final/./src/config/db.js?");

/***/ }),

/***/ "./src/containers/MongoDbContainer.js":
/*!********************************************!*\
  !*** ./src/containers/MongoDbContainer.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectUtils.js */ \"./src/utils/objectUtils.js\");\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/db */ \"./src/config/db.js\");\n\n\n\nawait mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_config_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mongodb.cnxStr, _config_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mongodb.options);\n\nclass MongoDbContainer {\n  constructor(modelName, schema) {\n    this.collection = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(modelName, schema);\n  }\n\n  async save(object) {\n    try {\n      let doc = await this.collection.create(object);\n      doc = (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.asPOJO)(doc);\n      (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)(doc, \"_id\", \"id\");\n      (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.removeField)(doc, \"__v\");\n      return doc;\n    } catch (error) {\n      throw new Error(`Error al guardar: ${error}`);\n    }\n  }\n\n  async update(object) {\n    try {\n      (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)(object, \"id\", \"_id\");\n      const {\n        n,\n        nModified\n      } = await this.collection.replaceOne({\n        _id: object._id\n      }, object);\n\n      if (n == 0 || nModified == 0) {\n        throw new Error(\"Error al actualizar: no encontrado\");\n      } else {\n        (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)(object, \"_id\", \"id\");\n        (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.removeField)(object, \"__v\");\n        return (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.asPOJO)(object);\n      }\n    } catch (error) {\n      throw new Error(`Error al actualizar: ${error}`);\n    }\n  }\n\n  async getById(id) {\n    try {\n      const docs = await this.collection.find({\n        _id: id\n      }, {\n        __v: 0\n      });\n\n      if (docs.length == 0) {\n        return null;\n      } else {\n        const result = (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)((0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.asPOJO)(docs[0]), \"_id\", \"id\");\n        return result;\n      }\n    } catch (error) {\n      console.error(`Error al listar por id: ${error}`);\n      return null;\n    }\n  }\n\n  async getAll() {\n    try {\n      let docs = await this.collection.find({}, {\n        __v: 0\n      }).lean();\n      docs = docs.map(_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.asPOJO);\n      docs = docs.map(d => (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)(d, \"_id\", \"id\"));\n      return docs;\n    } catch (error) {\n      throw new Error(`Error al listar todo: ${error}`);\n    }\n  }\n\n  async deleteById(id) {\n    try {\n      const {\n        n,\n        nDeleted\n      } = await this.collection.deleteOne({\n        _id: id\n      });\n\n      if (n == 0 || nDeleted == 0) {\n        throw new Error(\"Error al borrar: no encontrado\");\n      }\n    } catch (error) {\n      throw new Error(`Error al borrar: ${error}`);\n    }\n  }\n\n  async deleteAll() {\n    try {\n      await this.collection.deleteMany({});\n    } catch (error) {\n      throw new Error(`Error al borrar: ${error}`);\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MongoDbContainer);\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://proyecto-final/./src/containers/MongoDbContainer.js?");

/***/ }),

/***/ "./src/daos/carts/CartsMongoDbDAO.js":
/*!*******************************************!*\
  !*** ./src/daos/carts/CartsMongoDbDAO.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containers/MongoDbContainer */ \"./src/containers/MongoDbContainer.js\");\n/* harmony import */ var _models_cartSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/cartSchema */ \"./src/models/cartSchema.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__]);\n_containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nclass CartsMongoDbDAO {\n  constructor() {\n    this.container = new _containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Cart\", _models_cartSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n\n  async getAll() {\n    return await this.container.getAll();\n  }\n\n  async getById(id) {\n    return await this.container.getById(id);\n  }\n\n  async save(cart) {\n    return await this.container.save(cart);\n  }\n\n  async deleteById(id) {\n    await this.container.deleteById(id);\n  }\n\n  async update(cart) {\n    await this.container.update(cart);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartsMongoDbDAO);\n});\n\n//# sourceURL=webpack://proyecto-final/./src/daos/carts/CartsMongoDbDAO.js?");

/***/ }),

/***/ "./src/models/cartSchema.js":
/*!**********************************!*\
  !*** ./src/models/cartSchema.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  Schema\n} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst cartSchema = new Schema({\n  products: {\n    type: [],\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSchema);\n\n//# sourceURL=webpack://proyecto-final/./src/models/cartSchema.js?");

/***/ }),

/***/ "./src/utils/objectUtils.js":
/*!**********************************!*\
  !*** ./src/utils/objectUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"asPOJO\": () => (/* binding */ asPOJO),\n/* harmony export */   \"renameField\": () => (/* binding */ renameField),\n/* harmony export */   \"removeField\": () => (/* binding */ removeField)\n/* harmony export */ });\nconst asPOJO = obj => JSON.parse(JSON.stringify(obj));\n\nconst renameField = (record, from, to) => {\n  record[to] = record[from];\n  delete record[from];\n  return record;\n};\n\nconst removeField = (record, field) => {\n  const value = record[field];\n  delete record[field];\n  return value;\n};\n\n\n\n//# sourceURL=webpack://proyecto-final/./src/utils/objectUtils.js?");

/***/ })

};
;