import Papa from "papaparse";

export default function Test() {
  return (
    <div className="App">
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files;
          
          if (files) {
            
            Papa.parse(files[0], {
              complete: function(results) {
                
              }}
            )
          }
        }}
      />
    </div>
  );
}