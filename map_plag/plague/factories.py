import factory.fuzzy
import datetime
import pytz

from plague.models import Informer, PlaguePointer, PlaguePointerKeyword, KeywordTag


class KeywordTagFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = KeywordTag

    name = factory.Faker("word")
    type = factory.fuzzy.FuzzyInteger(1)


class InformerFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Informer

    lat = factory.fuzzy.FuzzyInteger(90)
    lan = factory.fuzzy.FuzzyInteger(90)
    street = factory.Faker("street_address")
    street_number = factory.fuzzy.FuzzyInteger(50)
    city = factory.Faker("city")
    name = factory.Faker("company")


class PlaguePointerFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = PlaguePointer

    informer = factory.SubFactory(InformerFactory)
    description = factory.Faker("word")
    keyword_tag = factory.SubFactory(KeywordTagFactory)
    date_time = datetime.datetime(2019, 1, 1, tzinfo=pytz.UTC)
    prescription = factory.Faker("word")
