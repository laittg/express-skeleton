module.exports = exports = function customInsertManyPlugin (schema, options) {
  schema.static('customInsertManyDemo', async function (modelName, docs) {
    var Model = this.model(modelName)
    try {
      var inserted = await Model.insertMany(docs, { ordered: false })
      console.log(inserted) // all succeed
    } catch (error) {
      if (error.err) {
        console.error(error.err.code, error.err.op) // single failure
      } else {
        // multiple failure
        error.writeErrors.map(err => {
          console.log(err.err.code, err.err.op)
        })
      }
    }
  })
}
