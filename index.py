import random
import string

if __name__ == "__main__":

    lower = string.ascii_lowercase
    upper = string.ascii_uppercase
    numbers = string.digits
    symbols = string.punctuation

    try:
        query_parameters = lower + upper + numbers

        query_parameters = ''.join(
            random.choice(query_parameters) for i in range(15)
        )
    except NameError:
        print(NameError)
    except TypeError:
        print(TypeError)
    except IndexError:
        print(IndexError)
    finally:
        print(f"{query_parameters}")