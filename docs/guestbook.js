/**
 * Web application
 */
const apiUrl = 'https://us-east.functions.cloud.ibm.com/api/v1/namespaces/AlejandroB.Villasenor%40ibm.com_East/actions/save-guestbook-entry-sequence';
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
        username: '19cce527-fc78-4955-af0d-f421387f4ff1', 
        password: 'HWELjFFpAtJq87b4o59DU3lq4eefYQCM2aH1AGto2bf3MZBkHABo1sjPF7Gmi07W '
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

