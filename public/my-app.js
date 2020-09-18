

let myCalendar = function myApp() {


    const { google } = require('googleapis');
    const { OAuth2 } = google.auth;
    
    const oAuth2Client = new OAuth2('996490370597-qg1if6r94dfgcikrdq2imabd747cufdd.apps.googleusercontent.com', 'upBzsDL5d9ID3W95l-LOaXnK')
    
    oAuth2Client.setCredentials({ refresh_token: '1//040jrH3OpARk2CgYIARAAGAQSNwF-L9IrxBKJJR4NkXY396xWXq9C90Zr7rI81_mfPkN5VmJns9PTYmzk8frUttIe_S9DvGr7Khg' })
    
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })
    
    // time 
    const eventStartTime = new Date()
    eventStartTime.setDate(eventStartTime.getDay() + 2)
    
    const eventEndTime = new Date()
    eventEndTime.setDate(eventEndTime.getDay() + 2)
    eventEndTime.setMinutes(eventEndTime.getMinutes() + 60)
    
    const event = {
        summary: 'Meet with Natalya',
        location: '2nd St, Carlstadt, NJ 07072',
        describtion: 'Meeting with Yuliana to make permament makeup',
        start: {
            dateTime: eventStartTime,
            timeZone: 'America/New_York'
        },
        end: {
            dateTime: eventEndTime,
            timeZone: 'America/New_York'
        },
        colorId: 1
    }
    
    // calendar.freebusy.query(
    //     {
    //         resource: {
    //             timeMin: eventStartTime,
    //             timeMax: eventEndTime,
    //             timeZone: 'America/New_York',
    //             items: [{ id: 'primary'}],
    //         },
    //     },
    //     (err, res) => {
    //         if(err) return console.error('free busy query error', err)
    
    //         const eventsArr = res.data.calendars.primary.busy
    
    //         if(eventsArr.length === 0) return calendar.events.insert({calendarId: 'primary', resource: event}, (err)=>{
    //             if(err) return console.error('calendar event creation error', err)
    //             return console.log('calendar event created')
    //         })
    //         //return console.log('im busy')
    //     }
    // )
    ////////////////
    var resource = {
        "summary": "Appointment",
        "location": "Somewhere",
        "start": {
          "dateTime": "2011-12-16T10:00:00.000-07:00"
        },
        "end": {
          "dateTime": "2011-12-16T10:25:00.000-07:00"
        }
      };
      var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': resource
      });
      request.execute(function(resp) {
        console.log(resp);
      });
    
}




module.exports = myCalendar
// source - https://www.youtube.com/watch?v=zrLf4KMs71E