/* eslint-disable no-undef */
'use strict';
function main(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const listItem = $('#shopping-list-entry').val();
    // eslint-disable-next-line no-console
    //console.log(listItem);
    $('#shopping-list-entry').val('');
    if(listItem === ''){
      $('.shopping-list').append(
        `<li>
                    <span class="shopping-item">Fresh Prince of Bel-Air dvd set</span>
                    <div class="shopping-item-controls">
                      <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                      </button>
                      <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                      </button>
                    </div>
                  </li>`);
    } else{
      $('.shopping-list').append(
        `<li>
                    <span class="shopping-item">${listItem}</span>
                    <div class="shopping-item-controls">
                      <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                      </button>
                      <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                      </button>
                    </div>
                  </li>`);
    }
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
    
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}
$(main);
