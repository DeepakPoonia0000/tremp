function importAll(r) {
  // r.keys() gets an array of all matching file (jin files ka format hmne btaya hai) in the path provided 
  return r.keys().map((item) => {
    // Remove './' from the beginning of the file path
    // Then remove the file extension (.png, .jpg, .jpeg, .svg) from the filename
    const name = item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
    console.log(r(item))
    return {
      // Use r(item) to require the file, which returns the file path as a module
      src: r(item),
      // Use the cleaned name without the './' prefix and without the file extension
      name: name
    };
  });
}

// Create a context module by requiring all files in the '../images' directory that match the specified extensions
const images = importAll(require.context('../assets/productImages', false, /\.(png|jpe?g|svg)$/));

export default images;