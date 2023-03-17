var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer gVt1efrYCHD6L6iYitX9vFHn9Y4qFxMKJuG5YKaLAyskOX5W"
);

var formdata = new FormData();
formdata.append("page", "1");
formdata.append(
  "data",
  '{"a1_1_text1": "Apple!","a1_2_number1": 1234,"a2_1": "dgkukhds","b1_1": {"text1": "qweqwe","text2":"qweqwasczcxv"},"c1_2_3_array": ["a1","a2"]}'
);

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
};

fetch("https://esg-service.nft-investment.io/api/v1/form", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
