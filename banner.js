function writeBanner() {

/* Banner Container */
document.write('<div id="banContainer">');

/* Background Image and Logos */
document.write('<div id="banImg"></div>');
document.write('<div class="logoContainer left">');
document.write('  <img src="images/abominables_192.jpg" title="Abominables" />');
document.write('  <img src="images/boysinblue_186.jpg" title="ComeOnYouBoysInBlue" />');
document.write('  <img src="images/blue_wings96x96.jpg" title="Dallas Blue Wings" />');
document.write('  <img src="images/flames4ever_192.jpg" title="FLAMES4EVER" />');
document.write('  <img src="images/habs-suck2_192.jpg" title="Habs Suck" />');
document.write('</div>');
document.write('<div class="logoContainer right">');
document.write('  <img src="images/clowning_192.jpg" title="Just Clowning Around" />');
document.write('  <img src="images/mcdavid2_100.jpg" title="Life With McDavid" />');
document.write('  <img src="images/ramblers_100.png" title="Ramblers" />');
document.write('  <img src="images/set-your-lineup_192.jpg" title="Set Your Lineup" />');
document.write('  <img src="images/zambonis100x100.jpg" title="Zambonis" />');
document.write('</div>');
/* End Background Image */

/* Navigation Menu */
document.write('<ul id="navMenu">');
document.write('  <li>');
document.write('    <a href="index.html">Home</a>');
document.write('  </li>');
document.write('  <li onmouseover="menuOpen(\'history\')" onmouseout="menuClose()">');
document.write('    <a href="standings_history.html">History</a>');
document.write('    <div id="history">');
document.write('      <a href="standings_history.html">Standings</a>');
document.write('      <a href="awards_history.html">Awards</a>');
document.write('      <a href="franchise_history.html">Franchise</a>');
document.write('      <a href="a-b.html">Ownership</a>');
document.write('      <a href="voting_history.html">Voting</a>');
document.write('    </div>');
document.write('  </li>');
document.write('  <li>');
document.write('    <a href="rules.html">Rules</a>');
document.write('  </li>');
document.write('  <li onmouseover="menuOpen(\'roto\')" onmouseout="menuClose()">');
document.write('    <a href="roto17-18.html">Roto Standings</a>');
document.write('    <div id="roto">');
document.write('      <a href="roto17-18.html">2017-18</a>');
document.write('      <a href="roto16-17.html">2016-17</a>');
document.write('      <a href="roto15-16.html">2015-16</a>');
document.write('      <a href="roto14-15.html">2014-15</a>');
document.write('      <a href="roto13-14.html">2013-14</a>');
document.write('      <a href="roto12-13.html">2012-13</a>');
document.write('      <a href="roto11-12.html">2011-12</a>');
document.write('      <a href="roto10-11.html">2010-11</a>');
document.write('      <a href="roto09-10.html">2009-10</a>');
document.write('      <a href="roto08-09.html">2008-09</a>');
document.write('    </div>');
document.write('  </li>');
document.write('  <li>');
document.write('    <a href="files/salary_planner17-18.xlsx">Salary Planner</a>');
document.write('  </li>');
document.write('  <li onmouseover="menuOpen(\'keepers\')" onmouseout="menuClose()">');
document.write('    <a href="files/keepers18-19.xlsx">Keepers</a>');
document.write('    <div id="keepers">');
document.write('      <a href="files/keepers18-19.xlsx">2018-19</a>');
document.write('      <a href="files/keepers17-18.xlsx">2017-18</a>');
document.write('      <a href="files/keepers16-17.xls">2016-17</a>');
document.write('      <a href="files/keepers15-16.xls">2015-16</a>');
document.write('      <a href="files/keepers14-15.xls">2014-15</a>');
document.write('      <a href="files/keepers13-14.xls">2013-14</a>');
document.write('      <a href="files/keepers12-13.xls">2012-13</a>');
document.write('      <a href="files/keepers11-12.xls">2011-12</a>');
document.write('      <a href="files/keepers10-11.xls">2010-11</a>');
document.write('      <a href="files/keepers09-10.xls">2009-10</a>');
document.write('    </div>');
document.write('  </li>');
document.write('  <li onmouseover="menuOpen(\'board\')" onmouseout="menuClose()">');
document.write('    <a href="files/draftboard18-19.xlsx">Draft Board</a>');
document.write('    <div id="board">');
document.write('      <a href="files/draftboard18-19.xlsx">2018-19</a>');
document.write('      <a href="files/draftboard17-18.xlsx">2017-18</a>');
document.write('      <a href="files/draftboard16-17.xlsx">2016-17</a>');
document.write('      <a href="files/draftboard15-16.xls">2015-16</a>');
document.write('      <a href="files/draftboard14-15.xls">2014-15</a>');
document.write('      <a href="files/draftboard13-14.xls">2013-14</a>');
document.write('      <a href="files/draftboard12-13.xls">2012-13</a>');
document.write('      <a href="files/draftboard11-12.xls">2011-12</a>');
document.write('      <a href="files/draftboard10-11.xls">2010-11</a>');
document.write('      <a href="files/draftboard09-10.xls">2009-10</a>');
document.write('    </div>');
document.write('  </li>');
document.write('  <li onmouseover="menuOpen(\'results\')" onmouseout="menuClose()">');
document.write('    <a href="draftresults18-19.html">Draft Results</a>');
document.write('    <div id="results">');
document.write('      <a href="draftresults18-19.html">2018-19</a>');
document.write('      <a href="draftresults17-18.html">2017-18</a>');
document.write('      <a href="draftresults16-17.html">2016-17</a>');
document.write('      <a href="draftresults15-16.html">2015-16</a>');
document.write('      <a href="draftresults14-15.html">2014-15</a>');
document.write('      <a href="draftresults13-14.html">2013-14</a>');
document.write('      <a href="draftresults12-13.html">2012-13</a>');
document.write('      <a href="draftresults11-12.html">2011-12</a>');
document.write('      <a href="draftresults10-11.html">2010-11</a>');
document.write('      <a href="draftresults09-10.html">2009-10</a>');
document.write('      <a href="draftresults08-09.html">2008-09</a>');
document.write('    </div>');
document.write('  </li>');
document.write('  <li onmouseover="menuOpen(\'rosters\')" onmouseout="menuClose()">');
document.write('    <a href="rosters18.html">Off-Season Rosters</a>');
document.write('    <div id="rosters">');
document.write('      <a href="rosters18.html">2018</a>');
document.write('      <a href="rosters17.html">2017</a>');
document.write('      <a href="rosters16.html">2016</a>');
document.write('      <a href="rosters15.html">2015</a>');
document.write('      <a href="rosters14.html">2014</a>');
document.write('      <a href="rosters13.html">2013</a>');
document.write('      <a href="rosters12.html">2012</a>');
document.write('      <a href="rosters10.html">2010</a>');
document.write('      <a href="rosters09.html">2009</a>');
document.write('    </div>');
document.write('  </li>');
document.write('  <li onmouseover="menuOpen(\'expansion\')" onmouseout="menuClose()">');
document.write('    <a href="files/expansion_draft16-17.xlsx">Expansion Draft</a>');
document.write('    <div id="expansion">');
document.write('      <a href="files/expansion_draft16-17.xlsx">2016-17 Draft Results</a>');
document.write('      <a href="files/protected_players16-17.xls">2016-17 Protected Players</a>');
document.write('    </div>');
document.write('  </li>');
document.write('</ul>');
/* End Navigation Menu */

document.write('</div>');
/* End Banner Container */

}
