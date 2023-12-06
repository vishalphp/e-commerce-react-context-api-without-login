import React from 'react';
import '../../asset/styles/search.scss';
import { TfiSearch } from "react-icons/tfi";


export default function HeaderSearch() {
  return (
    <>
      <div className="vk-navbar-search vk-navbar-search-2 toggle-original-elements">
                    <button className="vk-navbar-search-toggle vk-navbar-fixed-element-3 toggle-original" data-vk-navbar-toggle=".vk-navbar-search"><TfiSearch /></button>
                    <form className="vk-search" action="http://localhost:3000/search-results.html" data-search-live="vk-search-results-live" method="GET">
                      <div className="form-wrap">
                        <label className="form-label vk-input-label" for="vk-navbar-search-form-input">Search...</label>
                        <input className="vk-navbar-search-form-input form-input" id="vk-navbar-search-form-input" type="text" name="s" autocomplete="off" />
                        <div className="vk-search-results-live" id="vk-search-results-live"></div>
                        <button className="vk-search-form-submit fl-bigmug-line-search74" type="submit"></button>
                      </div>
                    </form>
                  </div>
    </>
  )
}
