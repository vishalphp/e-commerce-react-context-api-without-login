import React from 'react';
import '../../asset/styles/ui/headerlang.scss';

export default function HeaderLang() {
  return (
    <>
          <div className="select2-container select select-inline vk-navbar-fixed-element-2" id="s2id_autogen1">
                    <a href="javascript:void(0)" className="select2-choice">  
                     <span className="select2-chosen" id="select2-chosen-2">en</span>
                     <abbr className="select2-search-choice-close"></abbr>
                     <span className="select2-arrow" role="presentation">
                      <b role="presentation"></b>
                      </span>
                    </a>
                    
                    <label for="s2id_autogen2" className="select2-offscreen"></label>
                    <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-2" id="s2id_autogen2" />
                    <div className="select2-drop select2-display-none select-inline-dropdown">   <div className="select2-search select2-search-hidden select2-offscreen">       <label for="s2id_autogen2_search" className="select2-offscreen"></label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" className="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-2" id="s2id_autogen2_search" placeholder="" />   </div>   <ul className="select2-results" role="listbox" id="select2-results-2">   </ul>
                  </div>
                  </div>

                  <select className="select display-none select-inline vk-navbar-fixed-element-2" data-placeholder="Select an option" data-dropdown-className="select-inline-dropdown" tabindex="-1" title="">
                    <option value="en" selected="">en</option>
                    <option value="fr">fr</option>
                    <option value="es">es</option>
                  </select>
    </>
  )
}
