import React from 'react'
import Layout from '../../../components/Layout'
import ThingsOwnStyles from './the-future-of-wearables.module.css'

export default class Future extends React.Component {
  render() {
    return (
      <Layout>
        <div className={ThingsOwnStyles.white}>
          <div className={ThingsOwnStyles.futureWatch}>
            <div className={ThingsOwnStyles.strap1}>
              <div className={ThingsOwnStyles.adjustmentHole}></div>
              <div className={ThingsOwnStyles.adjustmentHole}></div>
              <div className={ThingsOwnStyles.adjustmentHole}></div>
            </div>
            <div className={ThingsOwnStyles.spinButton}></div>
            <div className={ThingsOwnStyles.powerButton}></div>
            <div className={ThingsOwnStyles.strap2}>
              <div className={ThingsOwnStyles.adjustmentHole}></div>
              <div className={ThingsOwnStyles.adjustmentHole}></div>
              <div className={ThingsOwnStyles.adjustmentHole}></div>
            </div>
          </div>
          <div className={ThingsOwnStyles.container}>
            <h1 className={ThingsOwnStyles.futureOfWearables}>The <br/>Future <br/>of <br/>Wearables</h1>
            <aside className={ThingsOwnStyles.titleAside + ' ' + ThingsOwnStyles.serif}> <em>No telemarketers need call, please.</em></aside>
          </div>
          <div className={[ThingsOwnStyles.post, ThingsOwnStyles.futureOfWearables, ThingsOwnStyles.serif].join(' ')}>
            <p className={ThingsOwnStyles.serif}>A non-mechanical watch beeps on my bedside table, demanding attention. I’m immediately angry: how <em>dare</em> it presume to be worthy of <em>my</em> attentions without me expressly giving them. I sometimes talk to tech this way. They’re supposed to be peasants but more often they’re the 3 ounce rock of heroin sitting in my pocket.</p>
            <p className={ThingsOwnStyles.serif}>I hunt my phone down and turn off all the notifications for the damn thing. This, I should mention, renders the watch useless. I give it back to my employer the next day so someone <em>else</em> can complain of their ever-draining attention span. <em>I wanted to win against the machine.</em></p>
          </div>
          <blockquote className={ThingsOwnStyles.futureOfWearables}>Notifications are the telemarketers of the 21st <br/>century.</blockquote>
          <aside className={ThingsOwnStyles.pullout}>“… We are unable, or perhaps unwilling, to answer the telephone right now. Please leave your name and telephone number, and we will return your call [BEEP]”</aside>
          <div className={ThingsOwnStyles.post}>
            <p className={ThingsOwnStyles.serif}>When I was growing up I’d eat at my grandparents’ house for dinner at least once a week. They always got a lot of calls, and those calls were always, _always_ from telemarketers. They donated a lot of money because they considered it their duty as good Christians and as a result there was always someone knocking.</p>
            <p className={ThingsOwnStyles.serif}>Their voicemail message is the most hilarious thing I’ve ever heard. I think it provides some unique insight into what my grandfather is like:</p>
            <p>
              <audio src="/img/future-of-wearables/grampy-voicemail.mp4" controls="controls">
                Your browser does not support the <code>audio</code> element.
              </audio>
            </p>
            <aside className={ThingsOwnStyles.pulloutRight}>
              <img src="/img/future-of-wearables/tape-recorder.jpg" alt="My grandfather's old tape recorder." />
            </aside>
            <p className={ThingsOwnStyles.serif}>“… We are unable, or perhaps unwilling, to answer the telephone right now. Please leave your name and telephone number, and we will return your call [BEEP]”</p>
            <p className={ThingsOwnStyles.serif}>That’s a generation that doesn’t want to be bothered. That man will never own an iPhone, believe me.</p>
            <p className={ThingsOwnStyles.serif}>This is in contrast to one of my friends at work, who has a smart watch and <em>checks it mid-conversation because he can't help it. </em>He at least says he likes the boondoggle; maybe I just have an aversion to anything Pavlovian?</p>
          </div>
          <div className={ThingsOwnStyles.post}>
            <p className={ThingsOwnStyles.serif}>These things interrupt you while you’re having dinner. They prevent you from having meaningful conversations with friends. They demand your attention at odd hours: when you are falling asleep, or reading things, or watching Netflix in bed with your husband. Wait, who? Telemarketers?</p>
          </div>

          <div className={ThingsOwnStyles.breakout}>
            <div class='large-image'>
              <img src="/img/future-of-wearables/sheets.jpg" alt="Sheets." />
            </div>

            <div className={ThingsOwnStyles.caption}>A bed where I would rather spend my time.</div>
          </div>

          <div className={ThingsOwnStyles.post}>
            <p className={ThingsOwnStyles.serif}>No. Notifications. Notifications do these things.</p>
            <p className={ThingsOwnStyles.serif}>Unlike telemarketers, however, who are easy to hate as an external force interrupting our daily routines, notifications are both an <strong>internal </strong>and <strong>external </strong>force. This means that part of the problem is <em>us. </em>We want validation, importance; so we keep paying attention to our notifications. We become addicted to the services demanding our attention. We refresh our email inboxes to make sure no one needs us right now. It’s a battle of our own willpower against the machines in our pockets. <em>I swear to god, I want to win. </em>But I still have Twitter installed, so...</p>
          </div>
          <blockquote className={ThingsOwnStyles.futureOfWearables}>We are in danger of this being our conception of the future.</blockquote>
          <div className={ThingsOwnStyles.post}>
            <p className={ThingsOwnStyles.serif}>I shouldn't assume anything of you; maybe you don't feel addicted. Maybe you have more willpower than I. Maybe you see this through a different lenses and see the good in it.</p>
            <p className={ThingsOwnStyles.serif}>I pull out my phone, reply to a text, check Twitter, refresh refresh refresh put it back. I pull out my phone, Twitter Snapchat Twitter Instagram Twitter refresh refresh put it back. I pull out my phone, work email personal email refresh refresh Twitter text Twitter refesh...</p>
            <p className={ThingsOwnStyles.serif}>It’s 8am, and I'm only just leaving for work.</p>
            <p className={ThingsOwnStyles.serif}>And the worst part is that it’s the notification drawing me in at first, then the heroin making me check over and over. I love the communities I am a part of; I’m also scared of the implications of this kind of addiction. A machine on my wrist then a machine embedded in my arm to a machine on my eyeballs.</p>
            <p className={ThingsOwnStyles.serif}><em>You'll never escape my clutches, </em>whispers Twitter.</p>
            <p className={ThingsOwnStyles.serif}>Notifications are like telemarketers on our wrists and in our pockets. Or maybe more like a drug dealer and you’re getting really, really into speed. Checking your phone during a conversation is rude; so is checking your watch. But <em>we have trouble being polite because we’re addicted. </em>This may be the future we’re living in but I don’t think it’s the future we should be striving for.</p>
          </div>
          <div className={ThingsOwnStyles.breakout + ' ' + ThingsOwnStyles.two}>
            <div className={ThingsOwnStyles.breakoutImage}><img src="/img/future-of-wearables/apple-watch.jpg" alt="Apple watch" /></div>
            <blockquote>
              <p>I disapprove.</p>
            </blockquote>
          </div>
          <h2 className={ThingsOwnStyles.interjection}>Seems like you hate notifications, Helen, not a particular product. Except for maybe Twitter.</h2>
          <div className={ThingsOwnStyles.post}>
            <p className={ThingsOwnStyles.serif}>Man, that’s loaded. I love the things that connect me to other people. Twitter’s like that. Hi Twitter friends. I think you're rad. And that’s the Internet! I remember posting on Final Fantasy forums and chat rooms and AIM and feeling like <em>there was no where in the world I couldn't go, </em>assuming my mom and dad didn't need to make a call. It was glorious and it is glorious and that’s why I feel so conflicted. What the hell are we all doing? Who do I talk to about this problem that feels encapsulated to the now? Who understands this? Who can help me answer these questions?</p>
            <p className={ThingsOwnStyles.serif}>I hate notifications. Smart watchs are <em>notification machines, </em>so I feel confident when I poo-poo them as unnecessary extravagences that I'm better without. when I come to my phone, though, and the services on it, I just can't say. That's my honest answer. There are things I like better, though, like the <a href="http://www2.withings.com/us/en/products/activite?">Withings Activité</a>:</p>
          </div>
          <video src="/img/future-of-wearables/withings.mp4" class="post-video" controls></video>
          <div className={ThingsOwnStyles.post}>
            <p className={ThingsOwnStyles.serif}>There are a few things about this watch I think are important to call out directly:</p>
            <ol>
              <li className={ThingsOwnStyles.serif}>It does not have a screen. It never receives notifications, thus it cannot greedily demand your attention. In order to get information from it other than the time, you need to go look for it on your phone.</li>
              <li className={ThingsOwnStyles.serif}>Its features are subtle. It automatically updates the time when you change time zones. A double tap shows you when you’ve set your alarm. It tracks your step count. Its feature set is small but include vast, intuitive improvements over a ‘dumb’ watch.</li>
              <li className={ThingsOwnStyles.serif}>It’s waterproof. As it markets itself as an activity monitor, this is an important ability to close.</li>
              <li className={ThingsOwnStyles.serif}>I included this last because it’s arguably less important than the other points but it’s attractive. It’s an extension of what is currently considered attractive in a watch. The Apple Watch’s charm lies in how cartoony it is. The Withings Activité’s charm lies in its sophistication.</li>
            </ol>
          </div>
          <blockquote className={ThingsOwnStyles.futureOfWearables}>The<br/>Future<br/>That<br/>We<br/>Need</blockquote>
          <div className={ThingsOwnStyles.post}>
            <p className={ThingsOwnStyles.serif}>The Apple Watch has already been covered so much by the media that predictions of its success are probably true. I currently imagine that it will play out a little bit like the iPad: a curiosity that few need but that works for certain things and that some people really enjoy. I’ve discussed what I believe are the biggest arguments against moving into a future where notifications light up on our wrists, but I’ll reiterate them again: Distraction. Time-wasting. Not being fully present in moments that matter. Etc.</p>
            <p className={ThingsOwnStyles.serif}>I’d encourage the future proposed by Withings instead: one where technology is working to improve our lives and at the same time, remain unintrusive. The watch that updates when you change time zones. The car that opens when your key is in your pocket. The thermometer that learns what temperature is the most comfortable for you at what times of day.</p>
            <p className={ThingsOwnStyles.serif}>Notifications will have their place. But only in the places where I want them. And more importantly, on devices I can always turn off if I want.</p>
          </div>
        </div>
      </Layout>
    )
  }
}