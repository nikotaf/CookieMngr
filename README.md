# CookieMngr ![CookieMngr][cookiemnger]
[cookiemnger]: /CookieMngr.png?raw=true "CookieMngr icon"
1. [About](#about)
2. [Install](#install)
3. [Click click](#click-click)
    * [Start clicking](#start-clicking)
    * [Auto buy](#auto-buy)
    * [Auto upgrade](#auto-clicker)
    * [Open Sesame](#open-sesame)
4. [Checkboxes](#checkboxes)
<a name="about"></a>
## About
This is an addon for the [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) game. It tries to fulfill all the clicking needs of the player. It almost eliminates the main objective of the game: to click.

As it may seems, it is not a cheating addon. It doesn't even use the techniques described in [Cheating | Cookie Clicker Wiki](http://cookieclicker.wikia.com/wiki/Cheating).

<a name="install"></a>
## Install
You can either use a [userscript manager](https://en.wikipedia.org/wiki/Userscript_manager) or the console of your browser.<br/>
Copy the content of `CookieMngr.js` and paste it in appropriate field. In case you don't have a [userscript manager](https://en.wikipedia.org/wiki/Userscript_manager), you will have to use the console of your browser each time you play [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/). That's it.

<a name="click-click"></a>
## Click click
After this script has run, you will be able to see 4 new button in the top bar.
<a name="start-clicking"></a>
### Start clicking
Clicking this, will start clicking the big cookie every 1/1000 of second and the button will turn red. Clicking again will turn the auto-clicker off and the color will revert to normal.
<a name="auto-buy"></a>
### Auto buy
This will enable automatic purchase of items that can be purchased. By default, the script will buy the last (and usualy more efficient building) enabled that is checked. By checking the `top` option, the script will buy the first enabled building in the list.<br/>
In case you switch to the `Sell` option, the script will do nothing. It only buys. It doesn't sell buildings.
<a name="auto-clicker"></a>
### Auto upgrade
Checking this one, will automatically buy the first upgrade, when it becomes available.
<a name="open-sesame"></a>
### Open Sesame
This one will open the built-in cheating interface. I didn't make anything here. I just provide an easier access.
<a name="checkboxes"></a>
## Checkboxes
You will notice that each building has 4 new boxes to the left.
* The big checkbox will allow the script to buy it, when it becomes enabled. If the checkbox is not checked, the script will not buy it, when it becomes enabled. But you can click it by hand and buy it, if you wish.<br/>
* The smaller checkbox, under the big one, will check all the big checboxes in the list. Unless, they exceed the amount, beside the big checkbox. Clicking a checked checkbox, will clear all the checks from the big checkboxes.<br/>
* The numbers beside the checkboxes, are the highest number of buildings you want the script to purchase. If it is reached, the big checkbox is unchecked. The default numbers, reffer to the minimum buildings required to get the achievement for each building.
* Next to the numbers, there is a button with a dot. This one, copies the number to the rest of buildings. Some buildings will excceed the maxed number alowed and may be unchecked, so beware.
