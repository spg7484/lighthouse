/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global document */

// must be defined as a standalone function expression to be stringified successfully.
function findMetaViewport() {
  return document.head.querySelector('meta[name="viewport"]');
}

var ViewportHasMetaContent = {
  run: function(driver, url) {
    return driver.evaluateFunction(findMetaViewport, url)
    .then(ret => {
      return {viewportMetaQuery: ret};
    });
  }
};

module.exports = ViewportHasMetaContent;