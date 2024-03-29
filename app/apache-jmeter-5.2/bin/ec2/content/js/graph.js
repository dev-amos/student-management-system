/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 566.0, "minX": 0.0, "maxY": 3554.0, "series": [{"data": [[0.0, 566.0], [0.1, 566.0], [0.2, 566.0], [0.3, 566.0], [0.4, 566.0], [0.5, 566.0], [0.6, 566.0], [0.7, 566.0], [0.8, 566.0], [0.9, 566.0], [1.0, 566.0], [1.1, 566.0], [1.2, 566.0], [1.3, 566.0], [1.4, 566.0], [1.5, 566.0], [1.6, 566.0], [1.7, 566.0], [1.8, 566.0], [1.9, 566.0], [2.0, 753.0], [2.1, 753.0], [2.2, 753.0], [2.3, 753.0], [2.4, 753.0], [2.5, 753.0], [2.6, 753.0], [2.7, 753.0], [2.8, 753.0], [2.9, 753.0], [3.0, 753.0], [3.1, 753.0], [3.2, 753.0], [3.3, 753.0], [3.4, 753.0], [3.5, 753.0], [3.6, 753.0], [3.7, 753.0], [3.8, 753.0], [3.9, 753.0], [4.0, 757.0], [4.1, 757.0], [4.2, 757.0], [4.3, 757.0], [4.4, 757.0], [4.5, 757.0], [4.6, 757.0], [4.7, 757.0], [4.8, 757.0], [4.9, 757.0], [5.0, 757.0], [5.1, 757.0], [5.2, 757.0], [5.3, 757.0], [5.4, 757.0], [5.5, 757.0], [5.6, 757.0], [5.7, 757.0], [5.8, 757.0], [5.9, 757.0], [6.0, 757.0], [6.1, 757.0], [6.2, 757.0], [6.3, 757.0], [6.4, 757.0], [6.5, 757.0], [6.6, 757.0], [6.7, 757.0], [6.8, 757.0], [6.9, 757.0], [7.0, 757.0], [7.1, 757.0], [7.2, 757.0], [7.3, 757.0], [7.4, 757.0], [7.5, 757.0], [7.6, 757.0], [7.7, 757.0], [7.8, 757.0], [7.9, 757.0], [8.0, 763.0], [8.1, 763.0], [8.2, 763.0], [8.3, 763.0], [8.4, 763.0], [8.5, 763.0], [8.6, 763.0], [8.7, 763.0], [8.8, 763.0], [8.9, 763.0], [9.0, 763.0], [9.1, 763.0], [9.2, 763.0], [9.3, 763.0], [9.4, 763.0], [9.5, 763.0], [9.6, 763.0], [9.7, 763.0], [9.8, 763.0], [9.9, 763.0], [10.0, 881.0], [10.1, 881.0], [10.2, 881.0], [10.3, 881.0], [10.4, 881.0], [10.5, 881.0], [10.6, 881.0], [10.7, 881.0], [10.8, 881.0], [10.9, 881.0], [11.0, 881.0], [11.1, 881.0], [11.2, 881.0], [11.3, 881.0], [11.4, 881.0], [11.5, 881.0], [11.6, 881.0], [11.7, 881.0], [11.8, 881.0], [11.9, 881.0], [12.0, 914.0], [12.1, 914.0], [12.2, 914.0], [12.3, 914.0], [12.4, 914.0], [12.5, 914.0], [12.6, 914.0], [12.7, 914.0], [12.8, 914.0], [12.9, 914.0], [13.0, 914.0], [13.1, 914.0], [13.2, 914.0], [13.3, 914.0], [13.4, 914.0], [13.5, 914.0], [13.6, 914.0], [13.7, 914.0], [13.8, 914.0], [13.9, 914.0], [14.0, 957.0], [14.1, 957.0], [14.2, 957.0], [14.3, 957.0], [14.4, 957.0], [14.5, 957.0], [14.6, 957.0], [14.7, 957.0], [14.8, 957.0], [14.9, 957.0], [15.0, 957.0], [15.1, 957.0], [15.2, 957.0], [15.3, 957.0], [15.4, 957.0], [15.5, 957.0], [15.6, 957.0], [15.7, 957.0], [15.8, 957.0], [15.9, 957.0], [16.0, 1160.0], [16.1, 1160.0], [16.2, 1160.0], [16.3, 1160.0], [16.4, 1160.0], [16.5, 1160.0], [16.6, 1160.0], [16.7, 1160.0], [16.8, 1160.0], [16.9, 1160.0], [17.0, 1160.0], [17.1, 1160.0], [17.2, 1160.0], [17.3, 1160.0], [17.4, 1160.0], [17.5, 1160.0], [17.6, 1160.0], [17.7, 1160.0], [17.8, 1160.0], [17.9, 1160.0], [18.0, 1417.0], [18.1, 1417.0], [18.2, 1417.0], [18.3, 1417.0], [18.4, 1417.0], [18.5, 1417.0], [18.6, 1417.0], [18.7, 1417.0], [18.8, 1417.0], [18.9, 1417.0], [19.0, 1417.0], [19.1, 1417.0], [19.2, 1417.0], [19.3, 1417.0], [19.4, 1417.0], [19.5, 1417.0], [19.6, 1417.0], [19.7, 1417.0], [19.8, 1417.0], [19.9, 1417.0], [20.0, 1460.0], [20.1, 1460.0], [20.2, 1460.0], [20.3, 1460.0], [20.4, 1460.0], [20.5, 1460.0], [20.6, 1460.0], [20.7, 1460.0], [20.8, 1460.0], [20.9, 1460.0], [21.0, 1460.0], [21.1, 1460.0], [21.2, 1460.0], [21.3, 1460.0], [21.4, 1460.0], [21.5, 1460.0], [21.6, 1460.0], [21.7, 1460.0], [21.8, 1460.0], [21.9, 1460.0], [22.0, 1642.0], [22.1, 1642.0], [22.2, 1642.0], [22.3, 1642.0], [22.4, 1642.0], [22.5, 1642.0], [22.6, 1642.0], [22.7, 1642.0], [22.8, 1642.0], [22.9, 1642.0], [23.0, 1642.0], [23.1, 1642.0], [23.2, 1642.0], [23.3, 1642.0], [23.4, 1642.0], [23.5, 1642.0], [23.6, 1642.0], [23.7, 1642.0], [23.8, 1642.0], [23.9, 1642.0], [24.0, 1714.0], [24.1, 1714.0], [24.2, 1714.0], [24.3, 1714.0], [24.4, 1714.0], [24.5, 1714.0], [24.6, 1714.0], [24.7, 1714.0], [24.8, 1714.0], [24.9, 1714.0], [25.0, 1714.0], [25.1, 1714.0], [25.2, 1714.0], [25.3, 1714.0], [25.4, 1714.0], [25.5, 1714.0], [25.6, 1714.0], [25.7, 1714.0], [25.8, 1714.0], [25.9, 1714.0], [26.0, 1777.0], [26.1, 1777.0], [26.2, 1777.0], [26.3, 1777.0], [26.4, 1777.0], [26.5, 1777.0], [26.6, 1777.0], [26.7, 1777.0], [26.8, 1777.0], [26.9, 1777.0], [27.0, 1777.0], [27.1, 1777.0], [27.2, 1777.0], [27.3, 1777.0], [27.4, 1777.0], [27.5, 1777.0], [27.6, 1777.0], [27.7, 1777.0], [27.8, 1777.0], [27.9, 1777.0], [28.0, 1783.0], [28.1, 1783.0], [28.2, 1783.0], [28.3, 1783.0], [28.4, 1783.0], [28.5, 1783.0], [28.6, 1783.0], [28.7, 1783.0], [28.8, 1783.0], [28.9, 1783.0], [29.0, 1783.0], [29.1, 1783.0], [29.2, 1783.0], [29.3, 1783.0], [29.4, 1783.0], [29.5, 1783.0], [29.6, 1783.0], [29.7, 1783.0], [29.8, 1783.0], [29.9, 1783.0], [30.0, 2121.0], [30.1, 2121.0], [30.2, 2121.0], [30.3, 2121.0], [30.4, 2121.0], [30.5, 2121.0], [30.6, 2121.0], [30.7, 2121.0], [30.8, 2121.0], [30.9, 2121.0], [31.0, 2121.0], [31.1, 2121.0], [31.2, 2121.0], [31.3, 2121.0], [31.4, 2121.0], [31.5, 2121.0], [31.6, 2121.0], [31.7, 2121.0], [31.8, 2121.0], [31.9, 2121.0], [32.0, 2140.0], [32.1, 2140.0], [32.2, 2140.0], [32.3, 2140.0], [32.4, 2140.0], [32.5, 2140.0], [32.6, 2140.0], [32.7, 2140.0], [32.8, 2140.0], [32.9, 2140.0], [33.0, 2140.0], [33.1, 2140.0], [33.2, 2140.0], [33.3, 2140.0], [33.4, 2140.0], [33.5, 2140.0], [33.6, 2140.0], [33.7, 2140.0], [33.8, 2140.0], [33.9, 2140.0], [34.0, 2142.0], [34.1, 2142.0], [34.2, 2142.0], [34.3, 2142.0], [34.4, 2142.0], [34.5, 2142.0], [34.6, 2142.0], [34.7, 2142.0], [34.8, 2142.0], [34.9, 2142.0], [35.0, 2142.0], [35.1, 2142.0], [35.2, 2142.0], [35.3, 2142.0], [35.4, 2142.0], [35.5, 2142.0], [35.6, 2142.0], [35.7, 2142.0], [35.8, 2142.0], [35.9, 2142.0], [36.0, 2191.0], [36.1, 2191.0], [36.2, 2191.0], [36.3, 2191.0], [36.4, 2191.0], [36.5, 2191.0], [36.6, 2191.0], [36.7, 2191.0], [36.8, 2191.0], [36.9, 2191.0], [37.0, 2191.0], [37.1, 2191.0], [37.2, 2191.0], [37.3, 2191.0], [37.4, 2191.0], [37.5, 2191.0], [37.6, 2191.0], [37.7, 2191.0], [37.8, 2191.0], [37.9, 2191.0], [38.0, 2196.0], [38.1, 2196.0], [38.2, 2196.0], [38.3, 2196.0], [38.4, 2196.0], [38.5, 2196.0], [38.6, 2196.0], [38.7, 2196.0], [38.8, 2196.0], [38.9, 2196.0], [39.0, 2196.0], [39.1, 2196.0], [39.2, 2196.0], [39.3, 2196.0], [39.4, 2196.0], [39.5, 2196.0], [39.6, 2196.0], [39.7, 2196.0], [39.8, 2196.0], [39.9, 2196.0], [40.0, 2216.0], [40.1, 2216.0], [40.2, 2216.0], [40.3, 2216.0], [40.4, 2216.0], [40.5, 2216.0], [40.6, 2216.0], [40.7, 2216.0], [40.8, 2216.0], [40.9, 2216.0], [41.0, 2216.0], [41.1, 2216.0], [41.2, 2216.0], [41.3, 2216.0], [41.4, 2216.0], [41.5, 2216.0], [41.6, 2216.0], [41.7, 2216.0], [41.8, 2216.0], [41.9, 2216.0], [42.0, 2257.0], [42.1, 2257.0], [42.2, 2257.0], [42.3, 2257.0], [42.4, 2257.0], [42.5, 2257.0], [42.6, 2257.0], [42.7, 2257.0], [42.8, 2257.0], [42.9, 2257.0], [43.0, 2257.0], [43.1, 2257.0], [43.2, 2257.0], [43.3, 2257.0], [43.4, 2257.0], [43.5, 2257.0], [43.6, 2257.0], [43.7, 2257.0], [43.8, 2257.0], [43.9, 2257.0], [44.0, 2286.0], [44.1, 2286.0], [44.2, 2286.0], [44.3, 2286.0], [44.4, 2286.0], [44.5, 2286.0], [44.6, 2286.0], [44.7, 2286.0], [44.8, 2286.0], [44.9, 2286.0], [45.0, 2286.0], [45.1, 2286.0], [45.2, 2286.0], [45.3, 2286.0], [45.4, 2286.0], [45.5, 2286.0], [45.6, 2286.0], [45.7, 2286.0], [45.8, 2286.0], [45.9, 2286.0], [46.0, 2317.0], [46.1, 2317.0], [46.2, 2317.0], [46.3, 2317.0], [46.4, 2317.0], [46.5, 2317.0], [46.6, 2317.0], [46.7, 2317.0], [46.8, 2317.0], [46.9, 2317.0], [47.0, 2317.0], [47.1, 2317.0], [47.2, 2317.0], [47.3, 2317.0], [47.4, 2317.0], [47.5, 2317.0], [47.6, 2317.0], [47.7, 2317.0], [47.8, 2317.0], [47.9, 2317.0], [48.0, 2337.0], [48.1, 2337.0], [48.2, 2337.0], [48.3, 2337.0], [48.4, 2337.0], [48.5, 2337.0], [48.6, 2337.0], [48.7, 2337.0], [48.8, 2337.0], [48.9, 2337.0], [49.0, 2337.0], [49.1, 2337.0], [49.2, 2337.0], [49.3, 2337.0], [49.4, 2337.0], [49.5, 2337.0], [49.6, 2337.0], [49.7, 2337.0], [49.8, 2337.0], [49.9, 2337.0], [50.0, 2343.0], [50.1, 2343.0], [50.2, 2343.0], [50.3, 2343.0], [50.4, 2343.0], [50.5, 2343.0], [50.6, 2343.0], [50.7, 2343.0], [50.8, 2343.0], [50.9, 2343.0], [51.0, 2343.0], [51.1, 2343.0], [51.2, 2343.0], [51.3, 2343.0], [51.4, 2343.0], [51.5, 2343.0], [51.6, 2343.0], [51.7, 2343.0], [51.8, 2343.0], [51.9, 2343.0], [52.0, 2437.0], [52.1, 2437.0], [52.2, 2437.0], [52.3, 2437.0], [52.4, 2437.0], [52.5, 2437.0], [52.6, 2437.0], [52.7, 2437.0], [52.8, 2437.0], [52.9, 2437.0], [53.0, 2437.0], [53.1, 2437.0], [53.2, 2437.0], [53.3, 2437.0], [53.4, 2437.0], [53.5, 2437.0], [53.6, 2437.0], [53.7, 2437.0], [53.8, 2437.0], [53.9, 2437.0], [54.0, 2474.0], [54.1, 2474.0], [54.2, 2474.0], [54.3, 2474.0], [54.4, 2474.0], [54.5, 2474.0], [54.6, 2474.0], [54.7, 2474.0], [54.8, 2474.0], [54.9, 2474.0], [55.0, 2474.0], [55.1, 2474.0], [55.2, 2474.0], [55.3, 2474.0], [55.4, 2474.0], [55.5, 2474.0], [55.6, 2474.0], [55.7, 2474.0], [55.8, 2474.0], [55.9, 2474.0], [56.0, 2494.0], [56.1, 2494.0], [56.2, 2494.0], [56.3, 2494.0], [56.4, 2494.0], [56.5, 2494.0], [56.6, 2494.0], [56.7, 2494.0], [56.8, 2494.0], [56.9, 2494.0], [57.0, 2494.0], [57.1, 2494.0], [57.2, 2494.0], [57.3, 2494.0], [57.4, 2494.0], [57.5, 2494.0], [57.6, 2494.0], [57.7, 2494.0], [57.8, 2494.0], [57.9, 2494.0], [58.0, 2543.0], [58.1, 2543.0], [58.2, 2543.0], [58.3, 2543.0], [58.4, 2543.0], [58.5, 2543.0], [58.6, 2543.0], [58.7, 2543.0], [58.8, 2543.0], [58.9, 2543.0], [59.0, 2543.0], [59.1, 2543.0], [59.2, 2543.0], [59.3, 2543.0], [59.4, 2543.0], [59.5, 2543.0], [59.6, 2543.0], [59.7, 2543.0], [59.8, 2543.0], [59.9, 2543.0], [60.0, 2646.0], [60.1, 2646.0], [60.2, 2646.0], [60.3, 2646.0], [60.4, 2646.0], [60.5, 2646.0], [60.6, 2646.0], [60.7, 2646.0], [60.8, 2646.0], [60.9, 2646.0], [61.0, 2646.0], [61.1, 2646.0], [61.2, 2646.0], [61.3, 2646.0], [61.4, 2646.0], [61.5, 2646.0], [61.6, 2646.0], [61.7, 2646.0], [61.8, 2646.0], [61.9, 2646.0], [62.0, 2722.0], [62.1, 2722.0], [62.2, 2722.0], [62.3, 2722.0], [62.4, 2722.0], [62.5, 2722.0], [62.6, 2722.0], [62.7, 2722.0], [62.8, 2722.0], [62.9, 2722.0], [63.0, 2722.0], [63.1, 2722.0], [63.2, 2722.0], [63.3, 2722.0], [63.4, 2722.0], [63.5, 2722.0], [63.6, 2722.0], [63.7, 2722.0], [63.8, 2722.0], [63.9, 2722.0], [64.0, 2761.0], [64.1, 2761.0], [64.2, 2761.0], [64.3, 2761.0], [64.4, 2761.0], [64.5, 2761.0], [64.6, 2761.0], [64.7, 2761.0], [64.8, 2761.0], [64.9, 2761.0], [65.0, 2761.0], [65.1, 2761.0], [65.2, 2761.0], [65.3, 2761.0], [65.4, 2761.0], [65.5, 2761.0], [65.6, 2761.0], [65.7, 2761.0], [65.8, 2761.0], [65.9, 2761.0], [66.0, 2836.0], [66.1, 2836.0], [66.2, 2836.0], [66.3, 2836.0], [66.4, 2836.0], [66.5, 2836.0], [66.6, 2836.0], [66.7, 2836.0], [66.8, 2836.0], [66.9, 2836.0], [67.0, 2836.0], [67.1, 2836.0], [67.2, 2836.0], [67.3, 2836.0], [67.4, 2836.0], [67.5, 2836.0], [67.6, 2836.0], [67.7, 2836.0], [67.8, 2836.0], [67.9, 2836.0], [68.0, 2913.0], [68.1, 2913.0], [68.2, 2913.0], [68.3, 2913.0], [68.4, 2913.0], [68.5, 2913.0], [68.6, 2913.0], [68.7, 2913.0], [68.8, 2913.0], [68.9, 2913.0], [69.0, 2913.0], [69.1, 2913.0], [69.2, 2913.0], [69.3, 2913.0], [69.4, 2913.0], [69.5, 2913.0], [69.6, 2913.0], [69.7, 2913.0], [69.8, 2913.0], [69.9, 2913.0], [70.0, 2960.0], [70.1, 2960.0], [70.2, 2960.0], [70.3, 2960.0], [70.4, 2960.0], [70.5, 2960.0], [70.6, 2960.0], [70.7, 2960.0], [70.8, 2960.0], [70.9, 2960.0], [71.0, 2960.0], [71.1, 2960.0], [71.2, 2960.0], [71.3, 2960.0], [71.4, 2960.0], [71.5, 2960.0], [71.6, 2960.0], [71.7, 2960.0], [71.8, 2960.0], [71.9, 2960.0], [72.0, 2998.0], [72.1, 2998.0], [72.2, 2998.0], [72.3, 2998.0], [72.4, 2998.0], [72.5, 2998.0], [72.6, 2998.0], [72.7, 2998.0], [72.8, 2998.0], [72.9, 2998.0], [73.0, 2998.0], [73.1, 2998.0], [73.2, 2998.0], [73.3, 2998.0], [73.4, 2998.0], [73.5, 2998.0], [73.6, 2998.0], [73.7, 2998.0], [73.8, 2998.0], [73.9, 2998.0], [74.0, 3160.0], [74.1, 3160.0], [74.2, 3160.0], [74.3, 3160.0], [74.4, 3160.0], [74.5, 3160.0], [74.6, 3160.0], [74.7, 3160.0], [74.8, 3160.0], [74.9, 3160.0], [75.0, 3160.0], [75.1, 3160.0], [75.2, 3160.0], [75.3, 3160.0], [75.4, 3160.0], [75.5, 3160.0], [75.6, 3160.0], [75.7, 3160.0], [75.8, 3160.0], [75.9, 3160.0], [76.0, 3176.0], [76.1, 3176.0], [76.2, 3176.0], [76.3, 3176.0], [76.4, 3176.0], [76.5, 3176.0], [76.6, 3176.0], [76.7, 3176.0], [76.8, 3176.0], [76.9, 3176.0], [77.0, 3176.0], [77.1, 3176.0], [77.2, 3176.0], [77.3, 3176.0], [77.4, 3176.0], [77.5, 3176.0], [77.6, 3176.0], [77.7, 3176.0], [77.8, 3176.0], [77.9, 3176.0], [78.0, 3294.0], [78.1, 3294.0], [78.2, 3294.0], [78.3, 3294.0], [78.4, 3294.0], [78.5, 3294.0], [78.6, 3294.0], [78.7, 3294.0], [78.8, 3294.0], [78.9, 3294.0], [79.0, 3294.0], [79.1, 3294.0], [79.2, 3294.0], [79.3, 3294.0], [79.4, 3294.0], [79.5, 3294.0], [79.6, 3294.0], [79.7, 3294.0], [79.8, 3294.0], [79.9, 3294.0], [80.0, 3301.0], [80.1, 3301.0], [80.2, 3301.0], [80.3, 3301.0], [80.4, 3301.0], [80.5, 3301.0], [80.6, 3301.0], [80.7, 3301.0], [80.8, 3301.0], [80.9, 3301.0], [81.0, 3301.0], [81.1, 3301.0], [81.2, 3301.0], [81.3, 3301.0], [81.4, 3301.0], [81.5, 3301.0], [81.6, 3301.0], [81.7, 3301.0], [81.8, 3301.0], [81.9, 3301.0], [82.0, 3308.0], [82.1, 3308.0], [82.2, 3308.0], [82.3, 3308.0], [82.4, 3308.0], [82.5, 3308.0], [82.6, 3308.0], [82.7, 3308.0], [82.8, 3308.0], [82.9, 3308.0], [83.0, 3308.0], [83.1, 3308.0], [83.2, 3308.0], [83.3, 3308.0], [83.4, 3308.0], [83.5, 3308.0], [83.6, 3308.0], [83.7, 3308.0], [83.8, 3308.0], [83.9, 3308.0], [84.0, 3318.0], [84.1, 3318.0], [84.2, 3318.0], [84.3, 3318.0], [84.4, 3318.0], [84.5, 3318.0], [84.6, 3318.0], [84.7, 3318.0], [84.8, 3318.0], [84.9, 3318.0], [85.0, 3318.0], [85.1, 3318.0], [85.2, 3318.0], [85.3, 3318.0], [85.4, 3318.0], [85.5, 3318.0], [85.6, 3318.0], [85.7, 3318.0], [85.8, 3318.0], [85.9, 3318.0], [86.0, 3334.0], [86.1, 3334.0], [86.2, 3334.0], [86.3, 3334.0], [86.4, 3334.0], [86.5, 3334.0], [86.6, 3334.0], [86.7, 3334.0], [86.8, 3334.0], [86.9, 3334.0], [87.0, 3334.0], [87.1, 3334.0], [87.2, 3334.0], [87.3, 3334.0], [87.4, 3334.0], [87.5, 3334.0], [87.6, 3334.0], [87.7, 3334.0], [87.8, 3334.0], [87.9, 3334.0], [88.0, 3366.0], [88.1, 3366.0], [88.2, 3366.0], [88.3, 3366.0], [88.4, 3366.0], [88.5, 3366.0], [88.6, 3366.0], [88.7, 3366.0], [88.8, 3366.0], [88.9, 3366.0], [89.0, 3366.0], [89.1, 3366.0], [89.2, 3366.0], [89.3, 3366.0], [89.4, 3366.0], [89.5, 3366.0], [89.6, 3366.0], [89.7, 3366.0], [89.8, 3366.0], [89.9, 3366.0], [90.0, 3396.0], [90.1, 3396.0], [90.2, 3396.0], [90.3, 3396.0], [90.4, 3396.0], [90.5, 3396.0], [90.6, 3396.0], [90.7, 3396.0], [90.8, 3396.0], [90.9, 3396.0], [91.0, 3396.0], [91.1, 3396.0], [91.2, 3396.0], [91.3, 3396.0], [91.4, 3396.0], [91.5, 3396.0], [91.6, 3396.0], [91.7, 3396.0], [91.8, 3396.0], [91.9, 3396.0], [92.0, 3496.0], [92.1, 3496.0], [92.2, 3496.0], [92.3, 3496.0], [92.4, 3496.0], [92.5, 3496.0], [92.6, 3496.0], [92.7, 3496.0], [92.8, 3496.0], [92.9, 3496.0], [93.0, 3496.0], [93.1, 3496.0], [93.2, 3496.0], [93.3, 3496.0], [93.4, 3496.0], [93.5, 3496.0], [93.6, 3496.0], [93.7, 3496.0], [93.8, 3496.0], [93.9, 3496.0], [94.0, 3498.0], [94.1, 3498.0], [94.2, 3498.0], [94.3, 3498.0], [94.4, 3498.0], [94.5, 3498.0], [94.6, 3498.0], [94.7, 3498.0], [94.8, 3498.0], [94.9, 3498.0], [95.0, 3498.0], [95.1, 3498.0], [95.2, 3498.0], [95.3, 3498.0], [95.4, 3498.0], [95.5, 3498.0], [95.6, 3498.0], [95.7, 3498.0], [95.8, 3498.0], [95.9, 3498.0], [96.0, 3535.0], [96.1, 3535.0], [96.2, 3535.0], [96.3, 3535.0], [96.4, 3535.0], [96.5, 3535.0], [96.6, 3535.0], [96.7, 3535.0], [96.8, 3535.0], [96.9, 3535.0], [97.0, 3535.0], [97.1, 3535.0], [97.2, 3535.0], [97.3, 3535.0], [97.4, 3535.0], [97.5, 3535.0], [97.6, 3535.0], [97.7, 3535.0], [97.8, 3535.0], [97.9, 3535.0], [98.0, 3554.0], [98.1, 3554.0], [98.2, 3554.0], [98.3, 3554.0], [98.4, 3554.0], [98.5, 3554.0], [98.6, 3554.0], [98.7, 3554.0], [98.8, 3554.0], [98.9, 3554.0], [99.0, 3554.0], [99.1, 3554.0], [99.2, 3554.0], [99.3, 3554.0], [99.4, 3554.0], [99.5, 3554.0], [99.6, 3554.0], [99.7, 3554.0], [99.8, 3554.0], [99.9, 3554.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 6.0, "series": [{"data": [[2100.0, 5.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 1.0], [700.0, 4.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 3.0], [3100.0, 2.0], [800.0, 1.0], [3300.0, 6.0], [3200.0, 1.0], [3400.0, 2.0], [3500.0, 2.0], [900.0, 2.0], [1100.0, 1.0], [1400.0, 2.0], [1600.0, 1.0], [1700.0, 3.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 11.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 39.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 25.300000000000008, "minX": 1.57321524E12, "maxY": 25.300000000000008, "series": [{"data": [[1.57321524E12, 25.300000000000008]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57321524E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 755.6666666666666, "minX": 1.0, "maxY": 3554.0, "series": [{"data": [[2.0, 3498.0], [35.0, 1995.0], [34.0, 2238.5], [37.0, 2121.0], [36.0, 2257.0], [39.0, 1642.0], [38.0, 1783.0], [41.0, 929.6666666666667], [40.0, 1417.0], [43.0, 755.6666666666666], [42.0, 1160.0], [45.0, 914.0], [44.0, 919.0], [3.0, 3554.0], [4.0, 3535.0], [5.0, 3366.0], [6.0, 3176.0], [8.0, 3230.5], [9.0, 3496.0], [12.0, 3175.3333333333335], [13.0, 2646.0], [14.0, 2761.0], [15.0, 3334.0], [16.0, 3308.0], [1.0, 3318.0], [17.0, 2913.0], [19.0, 2841.0], [20.0, 2474.0], [21.0, 2998.0], [22.0, 2191.0], [23.0, 2343.0], [26.0, 2323.3333333333335], [28.0, 2286.0], [29.0, 2342.5], [30.0, 2196.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[25.300000000000008, 2307.3400000000006]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 45.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 141.66666666666666, "minX": 1.57321524E12, "maxY": 289.1666666666667, "series": [{"data": [[1.57321524E12, 289.1666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57321524E12, 141.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57321524E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2307.3400000000006, "minX": 1.57321524E12, "maxY": 2307.3400000000006, "series": [{"data": [[1.57321524E12, 2307.3400000000006]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57321524E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2191.14, "minX": 1.57321524E12, "maxY": 2191.14, "series": [{"data": [[1.57321524E12, 2191.14]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57321524E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 9.020000000000001, "minX": 1.57321524E12, "maxY": 9.020000000000001, "series": [{"data": [[1.57321524E12, 9.020000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57321524E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 566.0, "minX": 1.57321524E12, "maxY": 3554.0, "series": [{"data": [[1.57321524E12, 3554.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57321524E12, 566.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57321524E12, 3393.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57321524E12, 3554.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57321524E12, 3514.6499999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57321524E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 763.0, "minX": 3.0, "maxY": 3297.5, "series": [{"data": [[9.0, 763.0], [18.0, 2236.5], [20.0, 3297.5], [3.0, 1460.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 560.0, "minX": 3.0, "maxY": 3077.5, "series": [{"data": [[9.0, 560.0], [18.0, 2129.5], [20.0, 3077.5], [3.0, 1361.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.57321524E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.57321524E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57321524E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.57321524E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.57321524E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57321524E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.57321524E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.57321524E12, 0.8333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57321524E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.57321524E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.57321524E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57321524E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

