(function (window, document) {

  var $forms = document.querySelectorAll('form');
  $forms = [].slice.call($forms);

  $forms.forEach(function($form) {
    $form.addEventListener('submit', function(event) {
      event.preventDefault();
      var $submit = this.querySelector('button[type="submit"]');

      $submit.classList.add('is-saving');

      setTimeout(function() {
        $submit.classList.remove('is-saving');
        $submit.classList.add('is-saved');
      }, 2000);

      setTimeout(function() {
        $submit.classList.remove('is-saved');
      }, 4000);
    })
  });

}(this, this.document));
