export default truncateText = (name, length) => {
    try{
        if (name.length > length){
            return name.substring(0, length) + '...'
          }
        
          return name
    }
    catch(e){
        console.log("Error while truncating name: ", e)
        return name
    }
  }