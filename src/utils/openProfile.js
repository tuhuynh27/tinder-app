import PubSub from 'pubsub-js'

export function openProfile(profile) {
  PubSub.publish('openProfile', profile)
}
