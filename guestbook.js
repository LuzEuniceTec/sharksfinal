  /**
 * Web application
 */
const apiUrl = 'https://us-east.functions.cloud.ibm.com/api/v1/namespaces/i.carrada%40ibm.com_us-east/actions/yoloswag';

const guestbook = {
  // retrieve the existing guestbook entries
  /*get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entries`,
      dataType: 'json'
    });
  },*/
  // add a single guestbook entry
  add(values) {
    console.log('Sending', values)
    return axios({
      method: 'POST',
      url: `${apiUrl}`,
      auth:{
        username: 'a29cdeb1-cbd5-4b7b-b05d-46480be29c66', 
        password: 'wF2wj99QcS37Al90CHEMEg1yGWA5DfNwg5MgRy4EVzTJkYjdCKXhsdrKJbeDZCQN'
      },
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      },
      data: JSON.stringify(values),
    });
  }
};

(function () {
  $(document).ready(() => {
    $("#myform").submit((event) => {
      alert("El formulario ha sido enviado");
      event.preventDefault();
  
      let values = {};
      $.each($("#myform").serializeArray(), (i, field) => {
        values[field.name] = field.value;
      });
  
      guestbook.add(values);
    });
  });
})();

