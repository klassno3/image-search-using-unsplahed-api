import { useState } from "react";
import SearchBar from "./component/SearchBar";
import ImageList from "./component/ImageList";
import searchImages from "./API";
function App () {
  const [ images, setImages ] = useState( [] );
  const handleSubmit = async( term,color ) => {
   const response= await searchImages( term,color );
    setImages( response)
  };

  return (
    <div className="App" style={{}}>
      
      <SearchBar onSubmit={ handleSubmit } />
      
      <ImageList images={ images} />
    </div>
  );
}

export default App;
