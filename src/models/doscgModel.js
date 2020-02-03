function DoscgModel(data) {
    this.data = data
}

DoscgModel.prototype.setData = function(data){
    this.data = data
}
DoscgModel.prototype.getData = function(){
    return this.data
}

module.exports = DoscgModel