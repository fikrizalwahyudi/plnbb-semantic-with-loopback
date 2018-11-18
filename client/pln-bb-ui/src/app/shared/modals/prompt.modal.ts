declare var $:any;

export function promptDialog(title, text, approve, deny?) {
  console.log('prompt called')
  $(`
    <div class="ui basic modal">
      <div class="ui icon header">
        <i class="archive icon"></i>
        ${title}
      </div>
      <div class="content text-center">
        <p>${text}</p>
      </div>
      <div class="actions text-center">
        <div class="ui red basic cancel inverted button">
          <i class="remove icon"></i>
          No
        </div>
        <div class="ui green ok inverted button">
          <i class="checkmark icon"></i>
          Yes
        </div>
      </div>
    </div>
  `).modal({
    closable  : false,
    onDeny    : deny,
    onApprove : approve
  })
  .modal('show')
}