import { DateTime } from "luxon";

let now = DateTime.now()

console.log(now.year);
console.log(now.month);
console.log(now.day);

console.log(now.toISOTime());
console.log(DateTime.DATETIME_HUGE_WITH_SECONDS);

