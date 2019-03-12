export const EVENTS = {
  Team: {
    new: {
      name: 'Team.new',
      description: 'When a team is created'
    },
    status: {
      change: {
        name: 'Team.status.change',
        description: 'When the team\'s status is changed'
      }
    },
    availability: {
      change: {
        name: 'Team.availability.change',
        description: 'When the team\'s availability is changed'
      }
    },
    measurement: {
      updated: {
        name: 'Team.measurement.updated',
        description: 'When the team\'s measurement is updated'
      },
      measured: {
        name: 'Team.measurement.measured',
        description: 'When the team\'s measurement is measured'
      }
    }
  },
  Alarm: {
    trigger: {
      name: 'Alarm.trigger',
      description: 'When the alarm is triggered'
    }
  },
  Dialog: {
    assignee: {
      change: {
        name: 'Dialog.assignee.change',
        description: 'When the conversation is assigned with an operator'
      }
    },
    message: {
      new: {
        name: 'Dialog.message.new',
        description: 'When a new message is created'
      },
      arrived: {
        name: 'Dialog.message.arrived',
        description: 'When a customer send a message',
        deprecated: true
      },
      sent: {
        name: 'Dialog.message.sent',
        description: 'When an agent send a message',
        deprecated: true
      }
    },
    question: {
      answered: {
        name: 'Dialog.question.answered',
        description: 'When a customer answer a question'
      }
    },
    open: {
      name: 'Dialog.open',
      description: 'When a customer open a new conversation'
    },
    typing: {
      name: 'Dialog.typing',
      description: 'When a user is typing'
    },
    funnel: {
      change: {
        name: 'Dialog.funnel.change',
        description: 'When the conversation\'s funnel is changed'
      }
    },
    status: {
      change: {
        name: 'Dialog.status.change',
        description: 'When the conversation\'s status is changed'
      }
    }
  },
  External: {
    salesforce: {
      chatter: {
        feed: {
          new: {
            name: 'External.salesforce.chatter.feed.new',
            description: 'When a new feed is posted in Salesforce Chatter'
          },
          comment: {
            name: 'External.salesforce.chatter.feed.comment',
            description: 'When a new comment is posted in Salesforce Chatter'
          }
        }
      }
    }
  }
};