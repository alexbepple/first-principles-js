# What is this?

This is an example for teaching principles for good unit tests.

The tags of this repo contain different stages of the example. _master_ is most likely not where you want to start.

* [_alpha_](https://github.com/alexbepple/first-principles-python/tree/alpha) contains examples of bad tests. They are not unit tests.
* [_beta_](https://github.com/alexbepple/first-principles-python/tree/beta) contains suggestions for fixing those. For some of the examples, I have included both naïve and proper solutions.


# Start hacking

## Install dependencies

    bundle install

If you are not on OS X, you are better off with

    bundle install --without osx

## Start testing

    make test.continuously

