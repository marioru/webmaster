# PA Webmaster test task
- Make a simple above-the-fold pre-lander with provided [copy](copy.md)
- The offer page promotes VPN service on online sites
- Use provided [skeleton](skeleton.html) as base-example, but feel free to use your creativity, rewrite and improve the page for best performance/visual appeal (some custom design expected to showcase a bit of your UI/graphic design skills)
- Host the page at your own domain or use free GitHub account ([GitHub pages](https://docs.github.com/en/github/working-with-github-pages))

### JS Part
- Initially: all `href='offer'`
- When visitor clicks on buttons (`class='btn'` in skeleton) - an offer page should open in the same window using JavaScript.
- Offer link format: `https://track.ultravpn.com/5d02892a4faea/click/[clickid]`
- [clickid] is a dynamic parameter fetched from page url
- Your page url should look like: https://mypage.com?clickid=123. (In case of our task, we just type `?clickid=whatever` at the end of your hosted page url)
- So the offer link will be `https://track.ultravpn.com/5d02892a4faea/click/123` in the end

**To summarize:** Your script should read the `?clickid=123` parameter from url, fetch its value (123), and attach it to the end of the offer page link. The link should open in the same window on button click.

### Task repository

- [https://github.com/pa-adcash/webmaster](https://github.com/pa-adcash/webmaster)
