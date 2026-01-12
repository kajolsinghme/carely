import cron from 'node-cron'

export const startAppointmentReminderCron = () => {
    cron.schedule('* * * * * *', () => {
        console.log('running a task every minute')
    })
}