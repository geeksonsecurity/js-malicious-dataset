
1. Check if the user-agent field match one of the following pattern
(will inject the script tag only if one of these matches)
 - `MSIE`
 - `Trident`
 - `(Windows NT 5.1(.*) Firefox\/\d)|(Windows NT 6.[0-3](.*) Firefox\/([3-9].[0|5|6]|1[0-9]|2[0-7]))`
 - `(Windows NT 10(.*) Edge\/12.[0-9+])`
 - `Windows NT`

2. Check if the cookie DOESN'T contain the `x-tds-app=` key (aka if
script tag had been already injected -> avoid multiple injection)

3. Insert a `<script>` tag pointing to `http://netfixe[DOT]ch/`

4. Set the `x-tds-app=1` value to the document cookie (injection succeed)
