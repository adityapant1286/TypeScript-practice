enum DaysOfweek {
    SUN, MON, TUE, WED, THU, FRI, SAT
}
namespace DaysOfweek {
    export function isBusinessDay(day : DaysOfweek) {
        switch(day) {
            case DaysOfweek.SUN:
            case DaysOfweek.SAT:
            return false;
            default: return true;
        }
    }
}

var day : DaysOfweek = DaysOfweek.SUN;

if (DaysOfweek.SUN === day)
    console.log("Have a good Sunday");

if (DaysOfweek.isBusinessDay(day))
   console.log("Business Day");

